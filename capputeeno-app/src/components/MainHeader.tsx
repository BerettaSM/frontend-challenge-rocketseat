'use client';

import styled from 'styled-components';

import { CartButton, Logo, MaxWidthWrapper, SearchInput } from '.';
import { useFilter } from '@/hooks';
import React from 'react';

export function MainHeader() {
    const { searchTerm, setSearchTerm } = useFilter();

    function handleSearch(newSearchTerm: string) {
        if (searchTerm === newSearchTerm) {
            return;
        }
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

        & > :first-child {
            margin-right: auto;
        }
    }
`;
