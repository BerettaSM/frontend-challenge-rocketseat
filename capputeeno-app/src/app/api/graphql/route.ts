import { GraphQLScalarType } from 'graphql';
import { NextRequest } from 'next/server';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

import { Product } from '@/types/models';

import { allProducts } from './db';

const typeDefs = gql`
    type Query {
        allProducts(
            sortField: String
            sortOrder: String
            filter: Filter
        ): [Product]
        Product(id: ID): Product
    }

    input Filter {
        category: String
    }

    type AllProducts {
        data: [Product]
    }

    type Product {
        id: ID!
        name: String
        description: String
        image_url: String
        category: String
        price_in_cents: Int
        created_at: Date
        sales: Int
    }

    scalar Date
`;

function compare(
    p1: Product,
    p2: Product,
    sortField: keyof Product,
    sortOrder: 'DSC' | 'ASC'
) {
    if (sortOrder === 'DSC') {
        [p1, p2] = [p2, p1];
    }
    if (
        typeof p1[sortField] === 'number' &&
        typeof p2[sortField] === 'number'
    ) {
        return Number(p1[sortField]) - Number(p2[sortField]);
    }
    return p1[sortField] < p2[sortField]
        ? -1
        : p1[sortField] > p2[sortField]
        ? 1
        : 0;
}

type Args = {
    sortField: keyof Product;
    sortOrder?: 'DSC' | 'ASC';
    filter: {
        category: 'mugs' | 't-shirts' | '';
    };
};

const resolvers = {
    Query: {
        allProducts(_: any, args: Args, __: any, ___: any) {
            const { sortField, sortOrder = 'DSC', filter } = args;

            let products = [...allProducts];

            if (typeof filter !== 'undefined') {
                products = products.filter(
                    (p) => p.category === filter.category
                );
            }

            return products.sort((p1, p2) =>
                compare(p1, p2, sortField, sortOrder)
            );
        },
        Product(_: any, args: { id: string }, __: any, ___: any) {
            const prod = allProducts.find((p) => p.id === args.id);
            return prod;
        },
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value: any) {
            return new Date(value); // value from the client
        },
        serialize(value: any) {
            return value.getTime(); // value sent to the client
        },
    }),
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer);

export { handler as GET, handler as POST };
