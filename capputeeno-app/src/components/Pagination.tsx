'use client';

import React from 'react';
import styled from 'styled-components';

import { PaginationButton } from './PaginationButton';
import { ChevronIcon } from './icons';
import { VisuallyHidden } from '.';

import { getPageNumbers } from '@/utils/helpers';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onChange(page: number): void;
}

export function Pagination({
    currentPage,
    totalPages,
    onChange,
}: PaginationProps) {
    const layoutId = React.useId();

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

    const pages = getPageNumbers(currentPage, totalPages);

    return (
        <Wrapper>
            {pages.map((page) => (
                <PaginationButton
                    isSelected={page === currentPage}
                    key={page}
                    onClick={() => handlePageChange(page)}
                    layoutId={layoutId}
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
