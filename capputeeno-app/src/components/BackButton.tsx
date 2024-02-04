'use client';

import styled from 'styled-components';

import { BackIcon } from './icons';

export function BackButton() {
    return (
        <Wrapper>
            <BackIcon /> Voltar
        </Wrapper>
    );
}

const Wrapper = styled.button`
    color: var(--secondary-text);
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    padding: 2px 2px 2px 0;

    & svg {
        margin-inline-end: 8px;
    }
`;
