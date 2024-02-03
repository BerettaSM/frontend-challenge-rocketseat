'use client';

import styled from "styled-components";

import { MainHeader } from "@/components";

export default function Home() {
    return (
        <Wrapper>
            <MainHeader />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        'HEADER'
        'MAIN';
    grid-template-rows: ${80 / 16}rem 1fr;
`;
