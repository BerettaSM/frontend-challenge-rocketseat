import type { Metadata } from 'next';
import { Saira } from 'next/font/google';

import { MainAppWrapper } from './MainAppWrapper';
import { DefaultProviders } from '@/context';
import { MainHeader } from '@/components';

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
                <DefaultProviders>
                    <MainAppWrapper>
                        <MainHeader />
                        {children}
                    </MainAppWrapper>
                </DefaultProviders>
            </body>
        </html>
    );
}
