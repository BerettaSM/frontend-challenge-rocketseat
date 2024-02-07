'use client';

import React from 'react';
import styled from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { ChevronIcon } from './icons';
import { PriorityType } from '@/types/enums';
import { useFilter } from '@/hooks';
import { BaseButton } from '.';

export function FilterByPriority() {
    const { priority, setPriority, setCurrentPage, setSearchTerm } = useFilter();
    const priorities = Object.values(PriorityType);

    function handlePriorityChange(newPriority: PriorityType) {
        if (priority === newPriority) {
            return;
        }
        setCurrentPage(1);
        setPriority(newPriority);
        setSearchTerm('');
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <DropdownButton aria-label="Escolher prioridade">
                    {priority ?? 'Organizar por'} <ChevronIcon />
                </DropdownButton>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownContent align="end">
                    {priorities.map((priority) => (
                        <DropdownItem
                            key={priority}
                            onClick={() => handlePriorityChange(priority)}
                        >
                            {priority}
                        </DropdownItem>
                    ))}
                </DropdownContent>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}

const DropdownButton = styled(BaseButton)`
    border-radius: 4px;
    color: var(--text-dark);
    display: flex;
    justify-content: flex-end;
    font-size: ${14 / 16}rem;
    align-items: center;
    height: 24px;
    padding: 8px;
`;

const DropdownContent = styled(DropdownMenu.Content)`
    background-color: #fff;
    padding: 12px 16px;
    width: 176px;
`;

const DropdownItem = styled(DropdownMenu.Item)`
    cursor: pointer;
    color: var(--text-dark);
    font-size: ${14 / 16}rem;
    width: 100%;
    background-color: inherit;

    &:not(:last-of-type) {
        margin-block-end: 8px;
    }

    &:hover {
        outline: none;
        text-decoration: underline;
    }
`;
