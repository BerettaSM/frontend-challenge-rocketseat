'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { GlobalStyles } from '@/styles/global-styles';
import { StyledComponentsRegistry } from '@/lib/registry';
import { FilterContextProvider } from './FilterContextProvider';
import { CartContextProvider } from './CartContextProvider';
import { MotionConfig } from 'framer-motion';

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
                        <MotionConfig reducedMotion="user">
                            <GlobalStyles />
                            {children}
                        </MotionConfig>
                    </StyledComponentsRegistry>
                </FilterContextProvider>
            </CartContextProvider>
        </QueryClientProvider>
    );
}
