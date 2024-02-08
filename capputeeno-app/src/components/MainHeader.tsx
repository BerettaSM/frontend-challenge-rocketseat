'use client';

import styled from 'styled-components';

import { CartButton, Logo, MaxWidthWrapper, SearchInput } from '.';
import { useFilter } from '@/hooks';
import { FilterTypes } from '@/types/enums';
import { useRouter } from 'next/navigation';

export function MainHeader() {
    const router = useRouter();
    const { searchTerm, setSearchTerm, setCurrentPage, setType } = useFilter();

    function handleSearch(newSearchTerm: string) {
        if (searchTerm === newSearchTerm) {
            return;
        }
        router.push('/');
        setCurrentPage(1);
        setType(FilterTypes.ALL);
        setSearchTerm(newSearchTerm);
    }

    return (
        <Wrapper>
            <MaxWidthWrapper>
                <Logo href="/">Capputeeno</Logo>
                <SearchInput
                    placeholder="Procurando por algo específico?"
                    onSearch={handleSearch}
                />
                <CartButton />
            </MaxWidthWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    background-color: #fff;
    width: 100%;

    & > :first-child {
        display: flex;
        align-items: center;
        gap: 24px;
        height: 100%;
        margin-right: auto;

        @media (max-width: 40rem) {
            align-items: flex-start;
            flex-wrap: wrap;
            padding-block: 14px 16px;
        }
    }
`;
