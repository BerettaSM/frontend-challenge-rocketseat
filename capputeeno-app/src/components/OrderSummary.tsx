'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';

import { BaseButton, Modal, Spacer } from '.';
import { CheckIcon } from './icons';
import { formatCurrency } from '@/utils/helpers';
import { useCart } from '@/hooks/use-cart';

export function OrderSummary() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [redirectTime, setRedirectTime] = React.useState(3);
    const router = useRouter();
    const { deliveryFee, subtotal, quantity, placeOrder } = useCart();

    const intervalId = React.useRef(0);

    function handlePlaceOrder() {
        try {
            placeOrder();
            setIsModalOpen(true);
            triggerRedirect()
        } catch (err) {
            if (err instanceof Error) {
                alert(err.message);
            }
        }
    }

    React.useEffect(() => {
        if(redirectTime === 0) {
            window.clearTimeout(intervalId.current);
            router.push('/');
        }
    }, [redirectTime, router])

    function triggerRedirect() {
        intervalId.current = window.setInterval(() => {
            setRedirectTime(p => p - 1);
       }, 1000);
    }

    const isCartEmpty = quantity === 0;

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
            <PlaceOrderButton onClick={handlePlaceOrder} disabled={isCartEmpty}>
                Finalizar a compra
            </PlaceOrderButton>
            <Link href={'#'}>Ajuda</Link>
            <Link href={'#'}>Reembolsos</Link>
            <Link href={'#'}>Entregas e frete</Link>
            <Link href={'#'}>Trocas e devoluções</Link>
            <Modal isOpen={isModalOpen} hideCloseButton>
                <Modal.Title >
                    <CheckIcon
                        style={{
                            color: 'var(--success-color)',
                        }}
                    />
                    <Spacer axis="horizontal" size={24} />
                    Pedido efetuado com sucesso.
                </Modal.Title>
                <Spacer axis="vertical" size={16} />
                <Modal.Description style={{ textAlign: 'center' }}>
                    Redirecionando em{' '}
                    <strong style={{ color: 'var(--success-color)' }}>
                        {redirectTime}
                    </strong>{' '}
                    {redirectTime === 1 ? 'segundo' : 'segundos'}.
                </Modal.Description>
            </Modal>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: #fff;
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    padding: 16px 24px 24px;
    flex: 1;
    height: 700px;

    & a:first-of-type {
        margin-block-start: auto;
    }

    & a {
        color: var(--text-dark);
        font-size: ${14 / 16}rem;
        text-transform: uppercase;
        transition: filter 200ms linear;
        margin-block-start: 8px;

        &:hover {
            filter: brightness(0.6);
        }
    }

    @media (max-width: 60rem) {
        padding-inline: 8px;
    }
`;

const Title = styled.h3`
    color: var(--text-dark-2);
    font-size: ${20 / 16}rem;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 30px;
`;

const SummaryWrapper = styled.p<{ $isBold?: boolean }>`
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

const PlaceOrderButton = styled(BaseButton)`
    background-color: var(--success-color);
    border-radius: 4px;
    color: var(--shapes-light);
    padding: 10px;
    text-transform: uppercase;
    margin-block-end: 16px;
`;
