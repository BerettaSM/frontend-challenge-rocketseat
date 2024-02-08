'use client';

import React from 'react';
import styled from 'styled-components';

import { FilterType as Filter } from './FilterType';
import { FilterTypes } from '@/types/enums';
import { useFilter } from '@/hooks';

export function FilterByType() {
    const layoutId = React.useId();
    const { type, setType, setCurrentPage, setSearchTerm } = useFilter();

    const filters = Object.values(FilterTypes);

    function handleClick(filterType: FilterTypes) {
        if(type === filterType) {
            return;
        }
        setCurrentPage(1);
        setType(filterType);
        setSearchTerm('');
    }

    return (
        <Wrapper>
            {filters.map((filter) => (
                <Filter
                    key={filter}
                    isSelected={filter === type}
                    onClick={() => handleClick(filter)}
                    layoutId={layoutId}
                >
                    {filter}
                </Filter>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.ul`
    display: flex;
    justify-content: center;
    gap: 40px;
    list-style: none;
    padding: 0;
    position: relative;

    @media (max-width: 40rem) {
        padding: 16px 0;
        white-space: nowrap;
    }

    @media (max-width: 30rem) {
        display: none;
    }
`;
