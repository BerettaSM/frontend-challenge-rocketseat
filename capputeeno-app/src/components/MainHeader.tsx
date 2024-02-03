import styled from 'styled-components';

import { CartButton, Logo, MaxWidthWrapper, SearchInput } from '.';

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
                <CartButton />
            </Wrapper>
        </MaxWidthWrapper>
    );
}

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    gap: 24px;
    height: 100%;

    & > :first-child {
        margin-right: auto;
    }
`;
