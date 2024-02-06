'use client';

import { BackButton, MaxWidthWrapper, ProductDescription, Spacer } from '@/components';
import { useProduct } from '@/hooks';

interface ProductPageProps {
    params: {
        id: string;
    };
}

export default function ProductPage({ params: { id } }: ProductPageProps) {

    const { product } = useProduct(id);

    return (
        <MaxWidthWrapper>
            <Spacer axis='vertical' size={24} />

            <BackButton />

            <Spacer axis='vertical' size={22} />
            
            {!!product && <ProductDescription product={product} />}
            
        </MaxWidthWrapper>
    );
}
