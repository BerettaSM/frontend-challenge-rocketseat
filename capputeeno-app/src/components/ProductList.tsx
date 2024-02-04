'use client';

import styled from 'styled-components';

import { ProductItem } from '.';
import { useProducts } from '@/hooks';

export function ProductList() {
    const { products, isLoading, isError, error } = useProducts();

    return (
        <Wrapper>

            {!isLoading && !isError && products !== undefined && (
                <>
                    {products.map(({ id, name, price_in_cents, image_url }) => (
                        <ProductItem
                            key={id}
                            id={id}
                            title={name}
                            priceInCents={price_in_cents}
                            imageUrl={image_url}
                        />
                    ))}
                </>
            )}

        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    grid-auto-rows: auto;
    justify-content: space-evenly;
    gap: 32px 24px;
`;
