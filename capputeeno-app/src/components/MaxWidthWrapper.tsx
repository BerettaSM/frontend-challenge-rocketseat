'use client';

import styled from 'styled-components';

interface MaxWidthWrapperProps {
    children: React.ReactNode;
    maxWidth?: number;
    padding?: number;
}

export function MaxWidthWrapper({
    maxWidth = 1120,
    padding = 16,
    children,
}: MaxWidthWrapperProps) {
    return (
        <Wrapper $maxwidth={maxWidth} $padding={padding}>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div<{ $maxwidth: number; $padding: number }>`
    margin-inline: auto;
    width: 100%;
    max-width: ${(p) => `${(p.$maxwidth + p.$padding * 2) / 16}rem`};
    padding-inline: ${(p) => p.$padding}px;
`;
