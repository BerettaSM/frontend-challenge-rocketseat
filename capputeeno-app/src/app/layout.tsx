import type { Metadata } from 'next';
import { Saira } from 'next/font/google';

import { StyledComponentsRegistry } from '@/lib/registry';
import { GlobalStyles } from './global-styles';

const saira = Saira({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
});

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
        <html lang="pt-br">
            <body className={saira.className}>
                <StyledComponentsRegistry>
                    <GlobalStyles />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
