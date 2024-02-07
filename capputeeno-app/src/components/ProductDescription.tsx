'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Spacer, Modal, BaseButton } from '.';
import { BackIcon, CartIcon, CheckIcon } from './icons';
import { Product } from '@/types/models';
import { formatCurrency } from '@/utils/helpers';
import { getTypeByCategory } from '@/utils/graphql';
import { useCart } from '@/hooks';
import { useRouter } from 'next/navigation';

interface ProductDescriptionProps {
    product: Product;
}

export function ProductDescription({ product }: ProductDescriptionProps) {
    const router = useRouter();
    const { addProduct, quantity } = useCart();
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const { category, description, name, price_in_cents, image_url } = product;

    function handleAddToCart() {
        try {
            addProduct(product);
            setIsModalOpen(true);
        } catch (err) {
            if (err instanceof Error) {
                alert(err.message);
            }
        }
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    const formattedPrice = formatCurrency(price_in_cents / 100);

    return (
        <Wrapper>
            <ImageContainer>
                <Image
                    src={image_url}
                    fill={true}
                    alt={name}
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </ImageContainer>

            <Details>
                <Category>{getTypeByCategory(category)}</Category>
                <Spacer axis="vertical" size={12} />
                <Title>{name}</Title>
                <Spacer axis="vertical" size={4} />
                <Price>{formattedPrice}</Price>
                <Spacer axis="vertical" size={24} />
                <Promotion>
                    *Frete de R$40,00 para todo o Brasil. Grátis para compras
                    acima de R$900,00.
                </Promotion>
                <Spacer axis="vertical" size={58} />
                <h3>Descrição</h3>
                <Spacer axis="vertical" size={8} />
                <Description>{description}</Description>
                <AddToCartButton onClick={handleAddToCart}>
                    <CartIcon />
                    Adicionar ao carrinho
                </AddToCartButton>
            </Details>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <Modal.Title>
                    <CheckIcon
                        style={{
                            color: 'var(--success-color)',
                            marginInlineEnd: '4px',
                        }}
                    />
                    <span style={{ textAlign: 'center' }}>
                        &nbsp; Um novo item foi adicionado no carrinho
                    </span>
                </Modal.Title>
                <Spacer axis="vertical" size={16} />
                <Modal.Description>
                    Você possui um total de <strong>{quantity}</strong>{' '}
                    {quantity == 1 ? 'item' : 'itens'} no carrinho.
                </Modal.Description>
                <Spacer axis="vertical" size={16} />
                <Modal.Actions>
                    <Modal.ActionButton
                        mood='primary'
                        onClick={() => router.push('/')}
                    >
                        <BackIcon />
                        &nbsp; Continuar comprando
                    </Modal.ActionButton>
                    {/* <Spacer axis="horizontal" size={32} /> */}
                    <Modal.ActionButton
                        mood='success'
                        onClick={() => router.push('/cart')}
                    >
                        <CartIcon />
                        &nbsp; Ir para o carrinho
                    </Modal.ActionButton>
                </Modal.Actions>
            </Modal>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    gap: 32px;
    margin-block-end: 32px;
    min-height: 580px;

    @media (max-width: 40rem) {
        flex-direction: column;
        height: calc(100% - 5rem);
    }
`;

const ImageContainer = styled.div`
    border-radius: 4px;
    overflow: hidden;
    position: relative;

    flex: 1.32;

    & img {
        object-fit: cover;
    }

    @media (max-width: 40rem) {
        flex: 1 0 200px;
    }
`;

const Details = styled.div`
    color: var(--text-dark-2);
    display: flex;
    flex-direction: column;
    flex: 1;

    & h3 {
        color: var(--text-dark);
        font-weight: 500;
        text-transform: uppercase;
    }

    @media (max-width: 40rem) {
        flex: 2;
    }
`;

const Category = styled.span`
    font-size: 1rem;
    line-height: 24px;
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 300;
    line-height: 48px;
`;

const Price = styled.p`
    color: var(--shapes-dark);
    font-size: ${20 / 16}rem;
    font-weight: 600;
    line-height: 30px;
`;

const Promotion = styled.span`
    font-size: ${12 / 16}rem;
    line-height: 18px;
`;

const Description = styled.p`
    font-size: ${14 / 16}rem;
    line-height: 24px;
    margin-block-end: 24px;
`;

const AddToCartButton = styled(BaseButton)`
    background-color: var(--brand-color);
    border-radius: 4px;
    color: var(--shapes-light);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 10px;
    margin-block-start: auto;
    text-transform: uppercase;

    & svg {
        flex-shrink: 0;
    }

    & svg path {
        stroke: var(--shapes-light);
    }

    @media (max-width: 15rem) {
        gap: 0px;
    }
`;
