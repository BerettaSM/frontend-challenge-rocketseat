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
                <CartButton>Hello?</CartButton>
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
