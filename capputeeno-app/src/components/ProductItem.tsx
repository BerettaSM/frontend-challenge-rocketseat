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

    const formattedPrice = 'R$ 43,00'

    return (
        <Wrapper>
            <Image
                src={imageUrl}
                height={300}
                width={256}
                quality={100}
                alt='some img'
            />
            <div>
                <h2>{title}</h2>
                <hr />
                <p>{formattedPrice}</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    background-color: #fff;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    overflow: hidden;
    width: fit-content;

    & div {
        padding: 8px 12px;
    }

    & h2 {
        font-size: 1rem;
        font-weight: 300;
    }

    & hr {
        border: none;
        border-block-start: 1px solid var(--shapes);
        margin-block: 8px;
    }

    & p {
        font-size: ${14 / 16}rem;
        font-weight: bold;
    }

    & img {
        object-fit: cover;
    }
`;