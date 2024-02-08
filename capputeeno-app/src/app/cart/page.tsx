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
    const formattedSubtotal = formatCurrency(subtotal / 100)

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
                        <span>{formattedSubtotal}</span>
                    </CartTotal>
                    <Spacer axis="vertical" size={24} />
                    <CartItemList />
                </CartView>
                <OrderSummary />
            </Wrapper>
        </MaxWidthWrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    margin-block: 24px 32px;
    gap: 32px;

    @media (max-width: 60rem) {
        flex-direction: column;
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
