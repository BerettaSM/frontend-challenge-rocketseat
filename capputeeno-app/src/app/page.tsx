'use client';

import { FilterBar, MaxWidthWrapper, Pagination, ProductList, Spacer } from "@/components";
import { useFilter } from "@/hooks";

export default function Home() {

    const { currentPage, setCurrentPage } = useFilter();

    function handlePageChange(page: number) {
        setCurrentPage(page);
    }

    return (
        <MaxWidthWrapper>
            <Spacer axis="vertical" size={32} />
            <FilterBar />
            <Spacer axis="vertical" size={24} />
            <Pagination
                currentPage={currentPage}
                totalPages={10}
                maxShownButtons={5}
                onChange={handlePageChange}
            />
            <Spacer axis="vertical" size={32} />
            <ProductList />
            <Spacer axis="vertical" size={74} />
            <Pagination
                currentPage={currentPage}
                totalPages={10}
                maxShownButtons={5}
                onChange={handlePageChange}
            />
            <Spacer axis="vertical" size={60} />
        </MaxWidthWrapper>
    );
}
