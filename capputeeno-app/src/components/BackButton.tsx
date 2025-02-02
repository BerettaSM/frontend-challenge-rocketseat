'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import { BaseButton } from '.';
import { BackIcon } from './icons';

interface BackButtonProps {
    href?: string;
}

export function BackButton({ href = '/' }: BackButtonProps) {
    const router = useRouter();

    function handleClick() {
        router.push(href);
    }

    return (
        <Wrapper onClick={handleClick}>
            <BackIcon /> Voltar
        </Wrapper>
    );
}

const Wrapper = styled(BaseButton)`
    color: var(--secondary-text);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    padding: 2px 2px 2px 0;

    & svg {
        margin-inline-end: 8px;
    }
`;
