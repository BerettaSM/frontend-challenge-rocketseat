'use client';

import { FilterBar, MaxWidthWrapper, Pagination, ProductList, Spacer } from "@/components";

export default function Home() {
    return (
        <MaxWidthWrapper>
            <Spacer axis="vertical" size={32} />
            <FilterBar />
            <Spacer axis="vertical" size={24} />
            <Pagination
                currentPage={1}
                totalPages={10}
                maxShownButtons={5}
            />
            <Spacer axis="vertical" size={32} />
            <ProductList />
            <Spacer axis="vertical" size={74} />
            <Pagination
                currentPage={1}
                totalPages={10}
                maxShownButtons={5}
            />
            <Spacer axis="vertical" size={60} />
        </MaxWidthWrapper>
    );
}
