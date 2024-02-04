'use client';

import React from 'react';

import { FilterContext } from '@/context';
import { FilterTypes, PriorityType } from '@/types/enums';

interface FilterContextProviderProps {
    children: React.ReactNode;
}

export function FilterContextProvider({
    children,
}: FilterContextProviderProps) {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(0);
    const [type, setType] = React.useState(FilterTypes.ALL);
    const [priority, setPriority] = React.useState(PriorityType.POPULARITY);

    const context = {
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        type,
        setType,
        priority,
        setPriority,
    };

    return (
        <FilterContext.Provider value={context}>
            {children}
        </FilterContext.Provider>
    );
}
