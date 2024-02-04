'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { Spacer } from '.';
import { CartIcon } from './icons';

export function ProductDescription({ id }: { id: string }) {
    return (
        <Wrapper>
            <ImageContainer>
                <Image
                    src="https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg"
                    fill={true}
                    alt="some alt"
                />
            </ImageContainer>

            <Details>
                <Category>Caneca</Category>

                <Spacer axis="vertical" size={12} />

                <Title>Caneca de cerâmica rústica</Title>

                <Spacer axis="vertical" size={4} />

                <Price>R$ 40,00</Price>

                <Spacer axis="vertical" size={24} />

                <Promotion>
                    *Frete de R$40,00 para todo o Brasil. Grátis para compras
                    acima de R$900,00.
                </Promotion>

                <Spacer axis="vertical" size={58} />

                <h3>Descrição</h3>

                <Spacer axis="vertical" size={8} />

                <Description>
                    Aqui vem um texto descritivo do produto, esta caixa de texto
                    servirá apenas de exemplo para que simule algum texto que
                    venha a ser inserido nesse campo, descrevendo tal produto.
                </Description>

                <AddToCartButton>
                    <CartIcon />
                    Adicionar ao carrinho
                </AddToCartButton>
                
            </Details>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    gap: 32px;
    min-height: 580px;
`;

const ImageContainer = styled.div`
    border-radius: 4px;
    overflow: hidden;
    position: relative;

    flex: 1.32;

    & img {
        object-fit: cover;
    }
`;

const Details = styled.div`
    color: var(--text-dark-2);
    display: flex;
    flex-direction: column;
    flex: 1;

    & h3 {
        font-weight: 500;
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
`;

const AddToCartButton = styled.button`
    background-color: var(--brand-color);
    border: none;
    border-radius: 4px;
    color: var(--shapes-light);
    cursor: pointer;
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 10px;
    margin-block-start: auto;
    transition: filter 250ms linear;

    & svg path {
        stroke: var(--shapes-light);
    }

    &:hover {
        filter: brightness(0.85);
    }
`;
