'use client';

import { StyledComponentsRegistry } from "@/lib/registry";
import { GlobalStyles } from "@/styles/global-styles";

interface DefaultProvidersProps {
    children: React.ReactNode;
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
    return (
        <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
        </StyledComponentsRegistry>
    );
}
