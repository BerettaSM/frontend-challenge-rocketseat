'use client';

import styled, { keyframes} from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import { CloseIcon } from './icons';
import { BaseButton, VisuallyHidden } from '.';

interface ModalProps {
    isOpen?: boolean;
    onClose?(): void;
    children: React.ReactNode;
}

export function Modal({
    isOpen,
    onClose,
    children
}: ModalProps) {
    return (
        <Wrapper modal open={isOpen}>
            <Dialog.Portal>
                <Backdrop />
                <Content>
                    {children}
                    <CloseButton onClick={onClose}>
                        <CloseIcon />
                        <VisuallyHidden>Fechar</VisuallyHidden>
                    </CloseButton>
                </Content>
            </Dialog.Portal>
        </Wrapper>
    );
}

const Wrapper = styled(Dialog.Root)`
    position: fixed;
`;

const fadeIn = keyframes`
    from {
        backdrop-filter: blur(0px);
        opacity: 1;
    }
    to {
        backdrop-filter: blur(10px);
        opacity: 1;
    }
`

const Backdrop = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;
    background: rgb(0 0 0 / 0.3);
    animation: ${fadeIn} 1 1000ms ease-in-out forwards;
`;

const slideDown = keyframes`
    from {
        transform: translateY(-30px) translate(-50%, -50%);
        opacity: 0;
    }
    to {
        transform: translateY(0px) translate(-50%, -50%);
        opacity: 1;
    }
`;

const Content = styled(Dialog.Content)`
    background: #fff;
    border-radius: var(--border-radius);
    color: var(--text-dark);
    padding: 16px 24px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: ${slideDown} 1 500ms ease-out alternate backwards;
    animation-delay: 750ms;

    & svg {
        flex-shrink: 0;
    }

    @media (max-width: 40rem) {
        min-width: 90vw;
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
    gap: 16px;

    @media (max-width: 40rem) {
        justify-content: center;
    }

    @media (max-width: 25rem) {
        flex-direction: column;
        gap: 8px;
    }
`;

const ActionButton = styled(BaseButton)`
    display: flex;
    align-items: center;

    border-radius: 4px;
    padding: 6px 8px;
    color: var(--shapes-light);

    & svg path {
        stroke: var(--shapes-light);
    }
`;


Modal.Title = Title;
Modal.Description = Description;
Modal.Actions = Actions;
Modal.ActionButton = ActionButton;
