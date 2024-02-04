'use client';

import styled from 'styled-components';
import Image from 'next/image';

interface ProductItemProps {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
}

export function ProductItem({ id, title, imageUrl, price }: ProductItemProps) {
    const formattedPrice = 'R$ 43,00';

    return (
        <Wrapper>
            <ImageContainer>
                <Image
                    src={imageUrl}
                    fill={true}
                    quality={100}
                    alt="some img"
                />
            </ImageContainer>
            <ProductDetails>
                <ProductTitle>{title}</ProductTitle>
                <Separator />
                <ProductPrice>{formattedPrice}</ProductPrice>
            </ProductDetails>
        </Wrapper>
    );
}

const Wrapper = styled.article`
    background-color: #fff;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    overflow: hidden;
    height: 378px;
`;

const ImageContainer = styled.div`
    position: relative;
    height: 300px;

    & img {
        object-fit: cover;
    }
`;

const ProductDetails = styled.div`
    padding: 8px 12px;
`;

const ProductTitle = styled.h2`
    font-size: 1rem;
    font-weight: 300;
`;

const ProductPrice = styled.p`
    font-size: ${14 / 16}rem;
    font-weight: bold;
`;

const Separator = styled.hr`
    border: none;
    border-block-start: 1px solid var(--shapes);
    margin-block: 8px;
`;
