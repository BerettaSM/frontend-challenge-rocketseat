'use client';

import { MaxWidthWrapper } from "@/components";
import { FilterBar, Pagination } from "@/components";

export default function Home() {
    return (
        <MaxWidthWrapper>
            <FilterBar />
            <Pagination
                currentPage={1}
                totalPages={10}
                maxShownButtons={5}
            />
        </MaxWidthWrapper>
    );
}
