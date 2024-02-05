'use client';

import React from 'react';
import styled from 'styled-components';

import { ProductItem } from '.';
import { Product } from '@/types/models';
import { range } from '@/utils/helpers';

interface ProductListProps {
    products: Product[];
}

export function ProductList({
    products,
}: ProductListProps) {
    return (
        <Wrapper>
            {products.map(({ id, name, price_in_cents, image_url }) => (
                <ProductItem
                    key={id}
                    id={id}
                    title={name}
                    priceInCents={price_in_cents}
                    href={`/products/${id}`}
                    imageUrl={image_url}
                />
            ))}
        </Wrapper>
    );
}

export function SkeletonProductList() {
    return (
        <Wrapper>
            {range(1, 9).map((i) => (
                <ProductItem
                    key={`${i}`}
                    id={`${i}`}
                    title={'A Skeleton title'}
                    priceInCents={69420}
                    href={'#'}
                    imageUrl={'#'}
                    isSkeleton={true}
                />
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    grid-auto-rows: auto;
    justify-content: space-evenly;
    gap: 32px 24px;
`;
