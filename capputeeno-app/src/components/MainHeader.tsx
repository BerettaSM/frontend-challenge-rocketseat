'use client';

import styled from 'styled-components';

import { Logo } from './Logo';
import { MaxWidthWrapper } from './MaxWidthWrapper';

export function MainHeader() {
    return (
        <MaxWidthWrapper>
            <Wrapper>
                <Logo href="/">Capputeeno</Logo>
                <div>input</div>
            </Wrapper>
        </MaxWidthWrapper>
    );
}

const Wrapper = styled.header`
    display: flex;

    & :first-child {
        margin-right: auto;
    }
`;
