import { ComponentProps } from 'react';

export function ChevronIcon(props: ComponentProps<'svg'>) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M8 10L12 14L16 10"
                stroke="#737380"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
