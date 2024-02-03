'use client';

import styled from 'styled-components';

import { Logo } from './Logo';
import { MaxWidthWrapper } from './MaxWidthWrapper';
import { SearchInput } from './SearchInput';

export function MainHeader() {
    function handleSearch(searchTerm: string) {
        // handle search
        
    }

    return (
        <MaxWidthWrapper>
            <Wrapper>
                <Logo href="/">Capputeeno</Logo>
                <SearchInput
                    placeholder="Procurando por algo específico?"
                    onSearch={handleSearch}
                />
            </Wrapper>
        </MaxWidthWrapper>
    );
}

const Wrapper = styled.header`
    display: flex;

    & :first-child {
        margin-right: auto;
    }
`;
