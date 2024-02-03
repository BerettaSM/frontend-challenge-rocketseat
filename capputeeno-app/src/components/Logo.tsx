'use client';

import styled from 'styled-components';
import Link, { LinkProps } from 'next/link';
import { Saira_Stencil_One } from 'next/font/google';

const sairaStencilOne = Saira_Stencil_One({
    subsets: ['latin'],
    weight: ['400'],
});

type LogoProps = {
    children: React.ReactNode;
} & LinkProps;

export function Logo({ children, ...delegated }: LogoProps) {
    return (
        <Wrapper>
            <Link className={sairaStencilOne.className} {...delegated}>
                <h1>{children}</h1>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    color: var(--logo-color);

    & a {
        text-decoration: none;
        color: inherit;
    }
`;
