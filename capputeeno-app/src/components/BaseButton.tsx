'use client';

import styled from 'styled-components';

import { bopAnimation } from '@/styles/global-styles';

export const BaseButton = styled.button`
    border: none;
    cursor: pointer;
    transition: filter 400ms ease-in-out;
    will-change: filter;

    & svg path {
        transform-origin: center;
    }

    &:hover svg path {
        animation: ${bopAnimation} 1 2000ms ease alternate forwards;
    }

    &:hover,
    &:active {
        filter: brightness(0.85);
    }
`;
