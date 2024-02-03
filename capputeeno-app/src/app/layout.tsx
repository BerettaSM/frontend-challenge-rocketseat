import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { StyledComponentsRegistry } from '@/lib/registry';
import { GlobalStyles } from './global-styles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Capputeeno',
    description: 'An e-commerce.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <GlobalStyles />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
