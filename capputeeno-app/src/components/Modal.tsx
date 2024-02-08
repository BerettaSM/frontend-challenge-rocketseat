'use client';

import styled, { keyframes } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import { CloseIcon } from './icons';
import { BaseButton, VisuallyHidden } from '.';
import React from 'react';

interface ModalProps {
    isOpen?: boolean;
    onClose?(): void;
    hideCloseButton?: boolean;
    children: React.ReactNode;
}

export function Modal({
    isOpen,
    onClose,
    hideCloseButton,
    children,
}: ModalProps) {
    return (
        <Wrapper modal open={isOpen}>
            <Dialog.Portal>
                <Backdrop onClick={onClose}>
                    <Content>
                        {children}
                        {!hideCloseButton && (
                            <CloseButton onClick={onClose}>
                                <CloseIcon />
                                <VisuallyHidden>Fechar</VisuallyHidden>
                            </CloseButton>
                        )}
                    </Content>
                </Backdrop>
            </Dialog.Portal>
        </Wrapper>
    );
}

const Wrapper = styled(Dialog.Root)`
    position: fixed;
    isolation: isolate;
`;

const fadeIn = keyframes`
    from {
        backdrop-filter: blur(0px);
    }
    to {
        backdrop-filter: blur(10px);
    }
`;

const Backdrop = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;
    padding: 8px;
    background: rgb(0 0 0 / 0.3);
    animation: ${fadeIn} 1 750ms ease-in-out forwards;
`;

const slideDown = keyframes`
    from {
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
`;

const Content = styled(Dialog.Content)`
    background: #fff;
    border-radius: var(--border-radius);
    color: var(--text-dark);
    padding: 16px 24px;
    position: absolute;
    inset: 0;
    margin: auto;
    width: calc(min(100%, 24rem) - 16px);
    height: min-content;

    animation: ${slideDown} 1 500ms ease-out alternate backwards;
    animation-delay: 500ms;

    & svg {
        flex-shrink: 0;
    }

    @media (max-width: 20rem) {
        padding: 8px 12px;
    }
`;

const Title = styled(Dialog.Title)`
    display: flex;
    align-items: center;
    color: var(--text-dark-2);
    font-size: 1.2rem;
    font-weight: 400;
`;

const Description = styled(Dialog.Description)``;

const CloseButton = styled(Dialog.Close)`
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    right: -8px;
    top: -28px;

    & svg {
        color: #fff;
        transition: filter 200ms ease-in-out;
    }

    &:hover svg {
        filter: brightness(0.8);
    }
`;

const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 8px;
`;

const ActionButtonWrapper = styled(BaseButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: var(--shapes-light);
    border-radius: 4px;
    padding: 6px 8px;

    & svg path {
        stroke: var(--shapes-light);
    }
`;

interface ActionButtonProps extends React.ComponentPropsWithRef<'button'> {
    children: React.ReactNode;
    mood: 'success' | 'primary' | 'danger';
}

const actionButtonTypes: {
    [K in ActionButtonProps['mood']]: React.CSSProperties;
} = {
    primary: {
        backgroundColor: 'var(--brand-color)',
    },
    success: {
        backgroundColor: 'var(--success-color)',
    },
    danger: {
        backgroundColor: 'var(--delete-color)',
    },
};

function ActionButton({ children, mood, ...delegated }: ActionButtonProps) {
    const style = actionButtonTypes[mood];

    if (!style) {
        throw new Error(`Invalid mood "${mood}" for button.`);
    }

    return (
        <ActionButtonWrapper {...delegated} style={style}>
            {children}
        </ActionButtonWrapper>
    );
}

Modal.Title = Title;
Modal.Description = Description;
Modal.Actions = Actions;
Modal.ActionButton = ActionButton;
