'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BaseButton } from '.';

type PaginationButtonProps = {
    isSelected?: boolean;
    children: React.ReactNode;
    layoutId?: string;
    onClick?(): void;
    disabled?: boolean;
};

export function PaginationButton({
    isSelected,
    children,
    layoutId,
    ...delegated
}: PaginationButtonProps) {
    return (
        <Wrapper>
            <Button $isSelected={!!isSelected} {...delegated}>
                {children}
            </Button>
            {isSelected && (
                <SelectedBorder layoutId={`${layoutId}-button-border`} />
            )}
        </Wrapper>
    );
}

const Wrapper = styled.li`
    position: relative;
    color: var(--text-dark);
    background-color: var(--shapes);
    border-radius: var(--border-radius);
    display: flex;
    list-style: none;
    height: 32px;
    width: 32px;
`;

const Button = styled(BaseButton)<{ $isSelected: boolean }>`
    background-color: var(--shapes);
    border: 2px solid transparent;
    border-radius: var(--border-radius);
    color: ${({ $isSelected }) =>
        $isSelected ? 'var(--orange-low)' : 'inherit'};
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

const SelectedBorder = styled(motion.div)`
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
    border: 2px solid var(--orange-low);
    border-radius: var(--border-radius);
    z-index: 5;
`;
