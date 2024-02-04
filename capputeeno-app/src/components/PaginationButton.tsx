'use client';

import { ComponentProps } from 'react';
import styled from 'styled-components';

type PaginationButtonProps = {
    isSelected?: boolean;
    children: React.ReactNode;
} & ComponentProps<'button'>;

export function PaginationButton({
    isSelected,
    children,
    ...delegated
}: PaginationButtonProps) {
    return (
        <Wrapper >
            <Button $isSelected={!!isSelected} {...delegated}>{children}</Button>
        </Wrapper>
    );
}

const Wrapper = styled.li`
    color: var(--text-dark);
    background-color: var(--shapes);
    border-radius: var(--border-radius);
    display: flex;
    list-style: none;
    height: 32px;
    width: 32px;
`;

const Button = styled.button<{ $isSelected: boolean }>`
    background-color: var(--shapes);
    border: ${({ $isSelected }) => $isSelected ? '2px solid var(--orange-low)' : 'none'};
    border-radius: var(--border-radius);
    color: ${({ $isSelected }) => $isSelected ? 'var(--orange-low)' : 'inherit'};
    font-weight: ${({ $isSelected }) => $isSelected && '600'};
    cursor: pointer;
    padding: 0;
    height: 100%;
    width: 100%;

    &:disabled {
        color: white;
        background-color: #c9c9c9;
        cursor: not-allowed;
    }
`;
