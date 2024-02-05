'use client';

import styled, { keyframes } from 'styled-components';

const breathAnim = keyframes`
    0%{
        background-position: 10% 0%;
    }
    50%, 100% {
        background-position: 91% 100%;
    }
`;

/*
    Drop this inside a relative positioned
    container.

    Optionally add overflow-hidden.
*/
export const Skeleton = styled.div`
    position: absolute;
    inset: 0;
    width: 102%;
    height: 102%;
    background: linear-gradient(135deg, #e0dddd 35%, #d6d2d2 50%, #e0dddd 65%);
    background-size: 300% 300%;
    border-radius: 8px;
    --webkit-animation: ${breathAnim} infinite 1.3s ease-in-out;
    --moz-animation: ${breathAnim} infinite 1.3s ease-in-out;
    animation: ${breathAnim} infinite 1.3s ease-in-out;
`;
