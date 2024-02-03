'use client';

import styled from 'styled-components';

import { FilterType as Filter } from './FilterType';
import { FilterTypes } from '@/types/enums';

export function FilterByType() {
    const filters = Object.values(FilterTypes);

    function handleClick(filterType: FilterTypes) {
        alert(filterType);
    }

    return (
        <Wrapper>
            {filters.map((filter, index) => (
                <Filter
                    key={filter}
                    // TODO: Properly wire isSelected logic
                    isSelected={index === 0}
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
