'use client';

import styled from 'styled-components';
import Image from 'next/image';

import { ProductInCart } from '@/types/models';
import { QuantitySelect } from './QuantitySelect';
import { range, formatCurrency } from '@/utils/helpers';
import { VisuallyHidden } from '.';
import { TrashIcon } from './icons';
import { useCart } from '@/hooks';

interface CartItemProps {
    product: ProductInCart;
}

export function CartItem({
    product: { name, image_url, price_in_cents, quantity, id, description },
}: CartItemProps) {
    const { changeProductQuantity, removeProduct, singleProductLimit } = useCart();

    function handleDelete() {
        removeProduct(id);
    }

    function handleQuantityChange(newValue: number) {
        changeProductQuantity(id, newValue);
    }

    const formattedPrice = formatCurrency(price_in_cents / 100);

    return (
        <Wrapper>
            <ImageContainer>
                <Image
                    src={image_url}
                    alt={name}
                    fill={true}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </ImageContainer>

            <CartItemDescription>
                <Grouper>
                    <Title>{name}</Title>
                    <DeleteButton onClick={handleDelete}>
                        <VisuallyHidden>Excluir do carrinho</VisuallyHidden>
                        <TrashIcon />
                    </DeleteButton>
                </Grouper>
                <Description>{description}</Description>
                <Grouper>
                    <QuantitySelect
                        values={range(1, singleProductLimit + 1)}
                        selectedValue={quantity}
                        onChange={handleQuantityChange}
                    />
                    <Price>{formattedPrice}</Price>
                </Grouper>
            </CartItemDescription>
        </Wrapper>
    );
}

const Wrapper = styled.li`
    background-color: #fff;
    border-radius: var(--border-radius);
    display: flex;
    overflow: hidden;

    @media (max-width: 35rem) {
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    min-height: 211px;
    width: 256px;
    flex-shrink: 0;

    & img {
        object-fit: cover;
    }

    @media (max-width: 35rem) {
        width: 100%;
    }
`;

const CartItemDescription = styled.div`
    color: var(--text-dark-2);
    display: flex;
    flex-direction: column;
    padding: 16px 16px 24px 32px;

    @media (max-width: 40rem) {
        padding: 8px;
    }
`;

const Title = styled.h4`
    font-size: ${20 / 16}rem;
    margin-block-end: 12px;
`;

const Description = styled.p`
    font-size: ${12 / 16}rem;
    line-height: 18px;
    margin-block-end: auto;
`;

const Price = styled.span`
    color: var(--shapes-dark);
    font-weight: 600;
    align-self: flex-end;
`;

const Grouper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

const DeleteButton = styled.button`
    border: none;
    cursor: pointer;
    padding: 0;
    flex-shrink: 0;
`;
