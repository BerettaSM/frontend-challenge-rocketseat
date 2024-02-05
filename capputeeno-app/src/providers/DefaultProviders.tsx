'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { GlobalStyles } from '@/styles/global-styles';
import { StyledComponentsRegistry } from '@/lib/registry';
import { FilterContextProvider } from './FilterContextProvider';
import { CartContextProvider } from './CartContextProvider';

interface DefaultProvidersProps {
    children: React.ReactNode;
}

const queryClient = new QueryClient();

export function DefaultProviders({ children }: DefaultProvidersProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <CartContextProvider>
            <FilterContextProvider>
                <StyledComponentsRegistry>
                    <GlobalStyles />
                    {children}
                </StyledComponentsRegistry>
            </FilterContextProvider>
            </CartContextProvider>
        </QueryClientProvider>
    );
}
