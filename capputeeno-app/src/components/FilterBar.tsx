'use client';

import styled from 'styled-components';

import { FilterByType, FilterByPriority } from '.';

export function FilterBar() {
    return (
        <Wrapper>
            <FilterByType />
            <FilterByPriority />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 40rem) {
        flex-direction: column;
        gap: 16px;
    }
`;
