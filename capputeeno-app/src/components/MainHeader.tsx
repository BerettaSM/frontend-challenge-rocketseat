'use client';

import styled from 'styled-components';

import { CartButton, Logo, MaxWidthWrapper, SearchInput } from '.';

export function MainHeader() {
    function handleSearch(searchTerm: string) {
        // handle search
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
