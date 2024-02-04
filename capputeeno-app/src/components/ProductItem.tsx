'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/utils/helpers';

interface ProductItemProps {
    id: string;
    title: string;
    imageUrl: string;
    priceInCents: number;
}

export function ProductItem({
    id,
    title,
    imageUrl,
    priceInCents,
}: ProductItemProps) {
    const formattedPrice = formatCurrency(priceInCents / 100);

    return (
        <Wrapper>
            <Link href={`/products/${id}`}>
                <ImageContainer>
                    <Image
                        src={imageUrl}
                        fill={true}
                        quality={100}
                        alt={title}
                    />
                </ImageContainer>
                <ProductDetails>
                    <ProductTitle>{title}</ProductTitle>
                    <Separator />
                    <ProductPrice>{formattedPrice}</ProductPrice>
                </ProductDetails>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.article`
    background-color: #fff;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    overflow: hidden;
    height: 378px;

    & a {
        text-decoration: none;
    }
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
    color: var(--text-dark-2);
    font-size: 1rem;
    font-weight: 300;
`;

const ProductPrice = styled.p`
    color: var(--shapes-dark);
    font-size: ${14 / 16}rem;
    font-weight: bold;
`;

const Separator = styled.hr`
    border: none;
    border-block-start: 1px solid var(--shapes);
    margin-block: 8px;
`;
