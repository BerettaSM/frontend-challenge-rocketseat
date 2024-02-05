'use client';

import styled from 'styled-components';

import {
    BackButton,
    CartItemList,
    MaxWidthWrapper,
    OrderSummary,
    Spacer,
} from '@/components';
import { useCart } from '@/hooks';
import { formatCurrency } from '@/utils/helpers';

export default function CartPage() {
    const { subtotal, quantity } = useCart();

    return (
        <MaxWidthWrapper>
            <Wrapper>
                <CartView>
                    <BackButton />
                    <Spacer axis="vertical" size={22} />
                    <CartTitle>Seu carrinho</CartTitle>
                    <Spacer axis="vertical" size={6} />
                    <CartTotal>
                        Total ({quantity}{' '}
                        {quantity !== 1 ? 'produtos' : 'produto'}){' '}
                        <span>{formatCurrency(subtotal)}</span>
                    </CartTotal>
                    <Spacer axis="vertical" size={24} />
                    <CartItemList />
                </CartView>
                <OrderSummary
                    onOrder={() => {
                        alert('Order placed. :)');
                    }}
                />
            </Wrapper>
        </MaxWidthWrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    margin-block-start: 24px;
    gap: 32px;

    --full-size-with-header: calc(100% - 5rem - 24px);
    height: var(--full-size-with-header);

    & > :last-child {
        flex: 1;
    }
`;

const CartView = styled.div`
    flex: 2.4;
`;

const CartTitle = styled.h2`
    color: var(--text-dark-2);
    font-size: ${24 / 16}rem;
    line-height: 36px;
    text-transform: uppercase;
`;

const CartTotal = styled.p`
    color: var(--text-dark-2);
    line-height: 24px;

    & span {
        font-weight: 600;
    }
`;
