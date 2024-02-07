'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import { Skeleton } from '.';
import { formatCurrency } from '@/utils/helpers';

interface ProductItemProps {
    id: string;
    title: string;
    imageUrl: string;
    priceInCents: number;
    href: string;
    isSkeleton?: boolean;
}

export function ProductItem({
    id,
    title,
    imageUrl,
    priceInCents,
    href,
    isSkeleton = false,
}: ProductItemProps) {
    const formattedPrice = formatCurrency(priceInCents / 100);

    return (
        <Link
            href={href}
            style={{
                textDecoration: 'none',
            }}
        >
            <Wrapper>
                <ImageContainer>
                    {isSkeleton ? (
                        <Skeleton />
                    ) : (
                        <Image
                            src={imageUrl}
                            fill={true}
                            quality={100}
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt={title}
                        />
                    )}
                </ImageContainer>
                <ProductDetails>
                    <ProductTitle>
                        {title}
                        {isSkeleton && <Skeleton />}
                    </ProductTitle>
                    <Separator />
                    <ProductPrice>
                        {formattedPrice}
                        {isSkeleton && <Skeleton />}
                    </ProductPrice>
                </ProductDetails>
            </Wrapper>
        </Link>
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
    overflow: hidden;
    
    & img {
        object-fit: cover;
        transition: transform 400ms ease-out;
    }

    &:hover img {
        transform: scale(1.1);
        transition-duration: 200ms;
    }
`;

const ProductDetails = styled.div`
    padding: 8px 12px;
`;

const ProductTitle = styled.h2`
    position: relative;
    color: var(--text-dark-2);
    font-size: 1rem;
    font-weight: 300;
    width: fit-content;
`;

const ProductPrice = styled.span`
    position: relative;
    display: block;
    color: var(--shapes-dark);
    font-size: ${14 / 16}rem;
    font-weight: bold;
    width: fit-content;
`;

const Separator = styled.hr`
    border: none;
    border-block-start: 1px solid var(--shapes);
    margin-block: 8px;
`;
