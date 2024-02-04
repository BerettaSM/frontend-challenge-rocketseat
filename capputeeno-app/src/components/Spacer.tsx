import { ComponentProps } from 'react';

interface SpacerProps extends ComponentProps<'span'> {
    size: number;
    axis: 'vertical' | 'horizontal';
}

// See: https://www.joshwcomeau.com/react/modern-spacer-gif/
export function Spacer({ size, axis, style = {}, ...delegated }: SpacerProps) {
    const width = axis === 'vertical' ? 1 : size;
    const height = axis === 'horizontal' ? 1 : size;

    return (
        <span
            style={{
                display: 'block',
                width,
                minWidth: width,
                height,
                minHeight: height,
                ...style,
            }}
            {...delegated}
        />
    );
}
