'use client';

import styled from 'styled-components';

import {
    BackButton,
    CartItemList,
    MaxWidthWrapper,
    OrderSummary,
    Spacer,
} from '@/components';

export default function CartPage() {
    return (
        <MaxWidthWrapper>
            <Wrapper>
                <CartView>
                    <BackButton />

                    <Spacer axis="vertical" size={22} />

                    <CartTitle>Seu carrinho</CartTitle>

                    <Spacer axis="vertical" size={6} />

                    <CartTotal>
                        Total (3 produtos) <span>R$ 161,00</span>
                    </CartTotal>

                    <Spacer axis="vertical" size={24} />

                    <CartItemList />
                </CartView>

                <OrderSummary
                    summaries={[
                        {
                            description: 'Subtotal de produtos',
                            valueInCents: 16100,
                        },
                        {
                            description: 'Entrega',
                            valueInCents: 4000,
                        },
                    ]}
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
