'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import { CartIcon } from './icons';
import { VisuallyHidden } from '.';
import { useCart } from '@/hooks';

export function CartButton() {
    const router = useRouter();
    const { quantity } = useCart();

    function handleNavigate() {
        router.push('/cart');
    }

    const cartStatus = quantity > 0 ? `${quantity} items selecionados` : 'vazio';

    return (
        <Wrapper onClick={handleNavigate}>
            <CartIcon />
            <VisuallyHidden>Seu carrinho - ${cartStatus}</VisuallyHidden>
            <ItemCounter role='presentation'>{quantity}</ItemCounter>
        </Wrapper>
    );
}

const Wrapper = styled.button`
    align-items: center;
    background-color: inherit;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: relative;
    height: 42px;
    min-width: 42px;
`;

const ItemCounter = styled.span`
    background-color: var(--delete-color);
    bottom: 0;
    border-radius: 50%;
    color: #fff;
    font-size: 10px;
    height: 18px;
    line-height: 18px;
    position: absolute;
    right: 0;
    width: 18px;
`;
