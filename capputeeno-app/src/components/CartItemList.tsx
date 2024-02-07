'use client';

import React from 'react';
import styled from 'styled-components';

import { CartItem, Modal, Spacer } from './';
import { useCart } from '@/hooks';

export function CartItemList() {
    const { products, removeProduct } = useCart();
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    
    const candidateDeletionId = React.useRef('');

    function openModal(id: string) {
        candidateDeletionId.current = id;
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function handleDelete() {
        removeProduct(candidateDeletionId.current);
        closeModal();
    }

    return (
        <Wrapper>
            {products.map((product) => (
                <CartItem
                    key={product.id}
                    product={product}
                    onDelete={openModal}
                />
            ))}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Modal.Description>
                    Excluir o produto do carrinho?
                </Modal.Description>
                <Spacer axis='vertical' size={16} />
                <Modal.Actions>
                    <Modal.ActionButton mood="danger" onClick={handleDelete}>
                        Excluir
                    </Modal.ActionButton>
                    <Modal.ActionButton mood="primary" onClick={closeModal}>
                        Cancelar
                    </Modal.ActionButton>
                </Modal.Actions>
            </Modal>
        </Wrapper>
    );
}

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;

    list-style: none;
    padding: 0;
`;
