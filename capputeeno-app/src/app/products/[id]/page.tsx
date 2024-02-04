import { BackButton, MaxWidthWrapper, ProductDescription, Spacer } from '@/components';

interface ProductPageProps {
    params: {
        id: string;
    };
}

export default function ProductPage({ params: { id } }: ProductPageProps) {
    return (
        <MaxWidthWrapper>
            <Spacer axis='vertical' size={24} />

            <BackButton />

            <Spacer axis='vertical' size={22} />

            <ProductDescription id={id} />

        </MaxWidthWrapper>
    );
}
