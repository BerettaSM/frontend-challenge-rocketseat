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
    0% {
        backdrop-filter: blur(0px);
        opacity: 0;
    }
    100% {
        backdrop-filter: blur(15px);
        opacity: 1;
    }
`

const Backdrop = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;
    background: rgb(0 0 0 / 0.3);
    animation: ${fadeIn} 1 1500ms ease-in-out forwards;
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
