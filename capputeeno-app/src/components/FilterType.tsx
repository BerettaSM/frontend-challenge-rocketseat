'use client';

import { ComponentProps } from 'react';
import styled from 'styled-components';

type FilterTypeProps = {
    children: React.ReactNode;
    isSelected?: boolean;
} & ComponentProps<'li'>;

export function FilterType({ children, isSelected = false, ...delegated }: FilterTypeProps) {
    return (
        <Wrapper $isSelected={isSelected} {...delegated}>
            <button type='button'>
                {children}
                {isSelected && <SelectionHighlight />}
            </button>
        </Wrapper>
    );
}

const Wrapper = styled.li<{ $isSelected: boolean }>`
    height: ${28 / 16}rem;
    position: relative;
    
    & button {
        background-color: inherit;
        border: none;
        cursor: pointer;
        color: ${({ $isSelected }) => $isSelected ? 'var(--text-dark-2)' : 'var(--text-dark)'};
        display: block;
        font-weight: ${({ $isSelected }) => $isSelected && '600'};
        text-transform: uppercase;
        height: 100%;
        outline-offset: 4px;
        padding: 0;
        width: 100%;
    }
`;

const SelectionHighlight = styled.div`
    background-color: var(--orange-low);
    bottom: -2px;
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
`;
