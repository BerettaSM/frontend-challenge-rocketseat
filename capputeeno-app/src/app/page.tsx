'use client';

import {
    FilterBar,
    MaxWidthWrapper,
    Pagination,
    ProductList,
    SkeletonProductList,
    Spacer,
} from '@/components';
import { useFilter, useProducts } from '@/hooks';

export default function Home() {
    const { currentPage, setCurrentPage } = useFilter();
    const { products, isLoading, isError, error, totalPages } = useProducts();

    function handlePageChange(page: number) {
        setCurrentPage(page);
    }

    return (
        <MaxWidthWrapper>
            <Spacer axis="vertical" size={32} />
            <FilterBar />
            <Spacer axis="vertical" size={24} />

            {isLoading && (
                <>
                    <Spacer axis="vertical" size={64} />
                    <SkeletonProductList />
                </>
            )}

            {!isLoading && !isError && !!products && (
                <>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onChange={handlePageChange}
                    />
                    <Spacer axis="vertical" size={32} />
                    <ProductList products={products} />
                    <Spacer axis="vertical" size={74} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onChange={handlePageChange}
                    />
                    <Spacer axis="vertical" size={60} />
                </>
            )}
        </MaxWidthWrapper>
    );
}
