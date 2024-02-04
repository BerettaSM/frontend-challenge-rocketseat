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
                {isSelected && <BoldedText role='presentation'>{children}</BoldedText>}
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
        text-transform: uppercase;
        height: 100%;
        outline-offset: 4px;
        padding: 0;
        position: relative;
        width: 100%;
    }
`;

/*
    The sole purpose of the following element
    is to avoid layout shift when changing
    changing fonts weights.
*/
const BoldedText = styled.span`
    display: block;
    text-transform: inherit;
    font-weight: 600;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 2px;
    left: 0px;
`;

const SelectionHighlight = styled.div`
    background-color: var(--orange-low);
    bottom: -2px;
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
`;
