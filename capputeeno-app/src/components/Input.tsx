'use client';

import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
    return <Wrapper {...props} />;
}

const Wrapper = styled.input`
    background-color: var(--bg-secondary);
    border: none;
    border-radius: var(--border-radius);
    color: var(--text-dark-2);
    font-size: ${14 / 16}rem;
    padding: 10px 16px;

    &::placeholder {
        color: var(--text-dark);
    }
`;
