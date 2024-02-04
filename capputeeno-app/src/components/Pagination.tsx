'use client';

import styled from 'styled-components';

import { PaginationButton } from './PaginationButton';
import { ChevronIcon } from './icons';
import { VisuallyHidden } from '.';

import { range } from '@/utils/helpers';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    maxShownButtons?: number;
    onChange(page: number): void;
}

export function Pagination({
    currentPage,
    totalPages,
    maxShownButtons = 5,
    onChange,
}: PaginationProps) {
    if (currentPage < 1 || currentPage > totalPages) {
        throw new RangeError(
            `currentPage expected to be in inclusive range (1, ${totalPages}). Received: ${currentPage}.`
        );
    }

    function handlePageChange(page: number) {
        if (page < 1 || page > totalPages) {
            alert(`Invalid page: ${page}.`);
            return;
        }
        onChange(page);
    }

    let firstShownPage = Math.max(
        1,
        currentPage - Math.floor(maxShownButtons / 2)
    );
    const lastShownPage = Math.min(
        totalPages + 1,
        firstShownPage + maxShownButtons
    );

    while (
        firstShownPage > 1 &&
        lastShownPage - firstShownPage < maxShownButtons
    ) {
        firstShownPage--;
    }

    const pages = range(firstShownPage, lastShownPage);

    return (
        <Wrapper>
            {pages.map((page) => (
                <PaginationButton
                    isSelected={page === currentPage}
                    key={page}
                    onClick={() => handlePageChange(page)}
                >
                    <VisuallyHidden>Página</VisuallyHidden> {page}
                </PaginationButton>
            ))}

            <PaginationButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronIcon
                    style={{
                        transform: 'rotate(90deg)',
                        margin: 'auto',
                    }}
                />
                <VisuallyHidden>Voltar página</VisuallyHidden>
            </PaginationButton>

            <PaginationButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <ChevronIcon
                    style={{
                        transform: 'rotate(270deg)',
                        margin: 'auto',
                    }}
                />
                <VisuallyHidden>Avançar página</VisuallyHidden>
            </PaginationButton>
        </Wrapper>
    );
}

const Wrapper = styled.ul`
    display: flex;
    gap: 2px;
    list-style: none;
    padding: 0;

    & :first-child {
        margin-inline-start: auto;
    }
`;
