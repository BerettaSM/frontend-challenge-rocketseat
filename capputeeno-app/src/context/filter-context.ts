import React from 'react';
import { FilterTypes, PriorityType } from '@/types/enums';

interface FilterContext {
    searchTerm: string;
    setSearchTerm(term: string): void;
    currentPage: number;
    setCurrentPage(currentPage: number): void;
    type: FilterTypes;
    setType(type: FilterTypes): void;
    priority: PriorityType;
    setPriority(priority: PriorityType): void;
}

export const FilterContext = React.createContext({} as FilterContext);
