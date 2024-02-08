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
    display: flex;
    align-items: center;
    gap: 24px;
    height: 100%;
    margin-right: auto;

    & a {
        text-decoration: none;
        color: inherit;
    }

    & h1 {
        font-weight: 400;
        text-transform: lowercase;
    }

    @media (max-width: 40rem) {
        height: revert;
        margin-block-start: 2px;
    }
`;
