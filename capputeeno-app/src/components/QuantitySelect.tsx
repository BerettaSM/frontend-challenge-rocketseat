'use client';

import styled from 'styled-components';

import { ChevronIcon } from './icons';

interface QuantitySelectProps {
    values: number[];
    selectedValue?: number;
    onChange: (value: number) => void;
}

export function QuantitySelect({
    values,
    onChange,
    selectedValue = 1,
}: QuantitySelectProps) {
    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = Number(event.target.value);
        onChange(value);
    }

    return (
        <Wrapper>
            <Select onChange={handleChange}>
                {values.map((value) => (
                    <option key={value} selected={value === selectedValue}>
                        {value}
                    </option>
                ))}
            </Select>
            <ChevronIcon />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    width: fit-content;

    & svg {
        position: absolute;
        top: 8px;
        right: 4px;
        pointer-events: none;
    }
`;

const Select = styled.select`
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    color: var(--text-dark);
    font-size: 1rem;
    padding: 6px 37px 6px 12px;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;
