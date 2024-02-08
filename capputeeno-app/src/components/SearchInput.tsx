'use client';

import React from 'react';
import styled from 'styled-components';

import { Input } from './Input';
import { SearchIcon } from './icons';
import { VisuallyHidden } from './VisuallyHidden';
import { BaseButton } from '.';

interface SearchInput {
    placeholder?: string;
    onSearch: (searchTerm: string) => void;
}

export function SearchInput({ placeholder, onSearch }: SearchInput) {
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();

        if (inputRef.current === null) {
            return;
        }

        onSearch(inputRef.current.value);
    }

    return (
        <Wrapper onSubmit={submitHandler}>
            <Input placeholder={placeholder} ref={inputRef} />
            <SubmitButton>
                <SearchIcon />
                <VisuallyHidden>Procurar</VisuallyHidden>
            </SubmitButton>
        </Wrapper>
    );
}

const Wrapper = styled.form`
    background-color: var(--bg-secondary);
    border-radius: var(--border-radius);
    height: ${42 / 16}rem;
    flex: 1 1 352px;
    max-width: 352px;
    position: relative;

    & input {
        padding-inline-end: 56px;
        height: 100%;
        width: 100%;
    }

    @media (max-width: 40rem) {
        margin: auto;
        order: 3;
    }
`;

const SubmitButton = styled(BaseButton)`
    background-color: inherit;
    padding: 0;
    position: absolute;
    right: 16px;
    top: 8px;

    &:hover:not(:disabled),
    &:active:not(:disabled) {
        filter: revert;
    }
`;
