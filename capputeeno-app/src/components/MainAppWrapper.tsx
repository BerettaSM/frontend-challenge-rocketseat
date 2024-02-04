'use client';

import styled from 'styled-components';

export const MainAppWrapper = styled.div`
    background-color: var(--bg-primary);
    display: grid;
    grid-template-areas:
        'HEADER'
        'MAIN';
    grid-template-rows: ${80 / 16}rem 1fr;
    min-height: 100%;
`;
