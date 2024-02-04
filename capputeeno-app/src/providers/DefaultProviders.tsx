'use client';

import { GlobalStyles } from '@/styles/global-styles';
import { StyledComponentsRegistry } from '@/lib/registry';
import { FilterContextProvider } from './FilterContextProvider';

interface DefaultProvidersProps {
    children: React.ReactNode;
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
    return (
        <FilterContextProvider>
            <StyledComponentsRegistry>
                <GlobalStyles />
                {children}
            </StyledComponentsRegistry>
        </FilterContextProvider>
    );
}
