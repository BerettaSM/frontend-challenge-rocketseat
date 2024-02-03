'use client';

import styled from 'styled-components';

import { FilterByType } from '.';

export function FilterBar() {
    return (
        <Wrapper>
            <FilterByType />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-block-start: 32px;
`;
