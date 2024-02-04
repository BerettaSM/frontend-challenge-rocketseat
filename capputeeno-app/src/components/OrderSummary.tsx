'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Spacer } from '.';
import { formatCurrency } from '@/utils/helpers';

interface SummaryData {
    description: string;
    valueInCents: number;
}

interface OrderSummaryProps {
    summaries: SummaryData[];
    onOrder: () => void;
}

export function OrderSummary({ onOrder, summaries = [] }: OrderSummaryProps) {
    const total = summaries.reduce((acc, s) => acc + s.valueInCents, 0);

    return (
        <Wrapper>
            <Title>Resumo do pedido</Title>

            <Spacer axis="vertical" size={30} />

            {summaries.length > 0 && (
                <>
                    {summaries.map(({ description, valueInCents }) => (
                        <React.Fragment key={description}>
                            <Summary
                                description={description}
                                valueInCents={valueInCents}
                            />
                            <Spacer axis="vertical" size={12} />
                        </React.Fragment>
                    ))}

                    <SummarySeparator />

                    <Spacer axis="vertical" size={8} />
                </>
            )}

            <Summary
                description="Total"
                valueInCents={total}
                style={{
                    fontWeight: '600',
                }}
            />

            <Spacer axis="vertical" size={40} />

            <PlaceOrderButton onClick={onOrder}>
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

type SummaryProps = SummaryData & React.ComponentProps<'p'>;

function Summary({ description, valueInCents, ...delegated }: SummaryProps) {
    const formattedValue = formatCurrency(valueInCents / 100);

    return (
        <SummaryWrapper {...delegated}>
            <span>{description}</span>
            <span>{formattedValue}</span>
        </SummaryWrapper>
    );
}

const SummaryWrapper = styled.p`
    color: var(--text-dark-2);
    display: flex;
    justify-content: space-between;
    line-height: 24px;
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
