'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Spacer } from '.';
import { formatCurrency } from '@/utils/helpers';
import { useCart } from '@/hooks/use-cart';

export function OrderSummary() {
    const { deliveryFee, subtotal, placeOrder } = useCart();

    function handlePlaceOrder() {
        try {
            placeOrder();
            alert('Compra efetuada com sucesso! :)');
        }
        catch(err) {
            if(err instanceof Error) {
                alert(err.message);
            }
        }
    }

    const total = subtotal + deliveryFee;

    const formattedSubtotal = formatCurrency(subtotal / 100);
    const formattedDeliveryFee = formatCurrency(deliveryFee / 100);
    const formattedTotal = formatCurrency(total / 100);

    return (
        <Wrapper>
            <Title>Resumo do pedido</Title>
            <Spacer axis="vertical" size={30} />
            <SummaryWrapper>
                <span>Subtotal</span>
                <span>{formattedSubtotal}</span>
            </SummaryWrapper>
            <Spacer axis="vertical" size={12} />
            <SummaryWrapper>
                <span>Entrega</span>
                <span>{formattedDeliveryFee}</span>
            </SummaryWrapper>
            <Spacer axis="vertical" size={12} />
            <SummarySeparator />
            <Spacer axis="vertical" size={8} />
            <SummaryWrapper $isBold>
                <span>Total</span>
                <span>{formattedTotal}</span>
            </SummaryWrapper>
            <Spacer axis="vertical" size={40} />
            <PlaceOrderButton onClick={handlePlaceOrder}>
                Finalizar a compra
            </PlaceOrderButton>
            <Link href={'#'}>Ajuda</Link>
            <Link href={'#'}>Reembolsos</Link>
            <Link href={'#'}>Entregas e frete</Link>
            <Link href={'#'}>Trocas e devoluções</Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: #fff;
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    padding: 16px 24px 24px;

    & a:first-of-type {
        margin-block-start: auto;
    }

    & a:not(:first-of-type) {
        margin-block-start: 8px;
    }

    & a {
        color: var(--text-dark);
        font-size: ${14 / 16}rem;
        text-transform: uppercase;
    }
`;

const Title = styled.h3`
    color: var(--text-dark-2);
    font-size: ${20 / 16}rem;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 30px;
`;

const SummaryWrapper = styled.p<{ $isBold?: boolean; }>`
    color: var(--text-dark-2);
    display: flex;
    justify-content: space-between;
    line-height: 24px;
    font-weight: ${({ $isBold }) => $isBold && '600'};
`;

const SummarySeparator = styled.hr`
    border: none;
    border-block-start: 1px solid var(--shapes);
`;

const PlaceOrderButton = styled.button`
    background-color: var(--success-color);
    border: none;
    border-radius: 4px;
    color: var(--shapes-light);
    cursor: pointer;
    padding: 10px;
    transition: filter 250ms linear;

    &:hover,
    &:active {
        filter: brightness(0.85);
    }
`;
