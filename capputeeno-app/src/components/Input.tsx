'use client';

import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.ComponentPropsWithRef<'input'> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    function Input(props, ref) {
        return <Wrapper {...props} ref={ref} />;
    }
);

const Wrapper = styled.input`
    background-color: inherit;
    border: none;
    border-radius: var(--border-radius);
    color: var(--text-dark-2);
    font-size: ${14 / 16}rem;
    padding: 10px 16px;

    &::placeholder {
        color: var(--text-dark);
    }
`;
