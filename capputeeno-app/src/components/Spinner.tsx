'use client';

import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
    size?: number;
    thickness?: number;
}

export function Spinner({ size = 32, thickness = 3 }: SpinnerProps) {
    return (
        <Wrapper
            role="alert"
            aria-live="assertive"
            $size={size}
            $thickness={thickness}
        ></Wrapper>
    );
}

const spin = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.div<{ $size: number; $thickness: number }>`
    position: relative;
    height: ${(p) => p.$size}px;
    width: ${(p) => p.$size}px;
    z-index: 10;

    &::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        inset: 0;
        border-radius: 50%;
        border: ${(p) => p.$thickness}px solid var(--orange-low);
        border-block-end-color: transparent;
        border-inline-end-color: transparent;
        animation: ${spin} 350ms infinite linear forwards;
    }
`;
