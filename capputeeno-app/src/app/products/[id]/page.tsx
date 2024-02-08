'use client';

import styled from 'styled-components';

import {
    BackButton,
    MaxWidthWrapper,
    ProductDescription,
    Spacer,
} from '@/components';
import { Spinner } from '@/components';
import { useProduct } from '@/hooks';

interface ProductPageProps {
    params: {
        id: string;
    };
}

export default function ProductPage({ params: { id } }: ProductPageProps) {
    const { product, isLoading, isError } = useProduct(id);

    return (
        <MaxWidthWrapper>
            <Spacer axis="vertical" size={24} />

            <BackButton />

            <Spacer axis="vertical" size={22} />

            {!!product && <ProductDescription product={product} />}

            {(isLoading || isError) && (
                <Info>
                    {isLoading && <Spinner size={64} />}
                    {isError && (
                        <div>
                            <p>
                                Oops, algo de inesperado ocorreu.
                                <br />
                                Tente novamente mais tarde!
                            </p>
                        </div>
                    )}
                </Info>
            )}
        </MaxWidthWrapper>
    );
}

const Info = styled.div`
    height: min(calc(100% - 24px - 24px - 22px), 580px);
    width: 100%;
    position: relative;
    display: grid;
    place-content: center;
    justify-items: center;
    align-items: center;
    text-align: center;
    gap: 16px;
`;
