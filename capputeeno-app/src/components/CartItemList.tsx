'use client';

import styled from 'styled-components';

import { ProductInCart } from '@/types/models';

import { CartItem } from './CartItem';

const PRODUCTS_MOCK: ProductInCart[] = [
    {    
        id: '1',
        category: 'mugs',
        description: 'Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.',
        name: 'Caneca de cerâmica rústica',
        image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
        price_in_cents: 4000,
        quantity: 1,
    },
    {    
        id: '2',
        category: 'mugs',
        description: 'Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.',
        name: 'Caneca Decaf! P&Co',
        image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg',
        price_in_cents: 3200,
        quantity: 1,
    },
    {    
        id: '3',
        category: 't-shirts',
        description: 'Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.',
        name: 'Camiseta Outcast',
        image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg',
        price_in_cents: 8900,
        quantity: 1,
    },
]

export function CartItemList() {

    return <Wrapper>
        {PRODUCTS_MOCK.map(product => (
            <CartItem
                key={product.id}
                product={product}
            />
        ))}
    </Wrapper>

}

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;

    list-style: none;
    padding: 0;
`
