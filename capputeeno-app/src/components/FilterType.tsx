'use client';

import styled from 'styled-components';
import { ComponentProps } from 'react';
import { motion } from 'framer-motion';
import { BaseButton } from '.';

type FilterTypeProps = {
    children: React.ReactNode;
    isSelected?: boolean;
    layoutId: string;
} & ComponentProps<'li'>;

export function FilterType({ children, layoutId, isSelected = false, ...delegated }: FilterTypeProps) {
    return (
        <Wrapper {...delegated}>
            <Button type='button' $isSelected={isSelected}>
                {children}
                {isSelected && <BoldedText role='presentation'>{children}</BoldedText>}
                {isSelected && <SelectionHighlight layoutId={`${layoutId}-bar`} />}
            </Button>
        </Wrapper>
    );
}

const Wrapper = styled.li`
    height: ${28 / 16}rem;
    position: relative;
`;

const Button = styled(BaseButton)<{ $isSelected: boolean }>`
    background-color: inherit;
    color: ${({ $isSelected }) => $isSelected ? 'var(--text-dark-2)' : 'var(--text-dark)'};
    display: block;
    text-transform: uppercase;
    height: 100%;
    outline-offset: 4px;
    padding: 0;
    position: relative;
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

const SelectionHighlight = styled(motion.div)`
    background-color: var(--orange-low);
    bottom: -2px;
    border-radius: 20%;
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
`;
