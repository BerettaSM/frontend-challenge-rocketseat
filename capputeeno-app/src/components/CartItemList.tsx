'use client';

import styled from 'styled-components';

import { CartItem } from './CartItem';
import { useCart } from '@/hooks';

export function CartItemList() {
    const { products } = useCart();

    return <Wrapper>
        {products.map(product => (
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
