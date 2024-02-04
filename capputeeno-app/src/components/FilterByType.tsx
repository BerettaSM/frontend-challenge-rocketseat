'use client';

import styled from 'styled-components';

import { FilterType as Filter } from './FilterType';
import { FilterTypes } from '@/types/enums';
import { useFilter } from '@/hooks';
import React from 'react';

export function FilterByType() {
    const { type, setType } = useFilter();

    const filters = Object.values(FilterTypes);

    function handleClick(filterType: FilterTypes) {
        setType(filterType);
    }

    return (
        <Wrapper>
            {filters.map((filter) => (
                <Filter
                    key={filter}
                    isSelected={filter === type}
                    onClick={() => handleClick(filter)}
                >
                    {filter}
                </Filter>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    list-style: none;
    padding: 0;
`;
