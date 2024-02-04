'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { ProductInCart } from '@/types/models';
import { QuantitySelect } from './QuantitySelect';
import { range, formatCurrency } from '@/utils/helpers';
import { VisuallyHidden } from '.';
import { TrashIcon } from './icons';

interface CartItemProps {
    product: ProductInCart;
}

export function CartItem({
    product: { name, image_url, price_in_cents, quantity, id, description },
}: CartItemProps) {
    const formattedPrice = formatCurrency(price_in_cents / 100);

    function handleDelete(event: React.MouseEvent<HTMLButtonElement>) {
        // handle delete
        alert(`${name} deleted!`);
    }

    function handleQuantityChange(newValue: number) {
        // handle change
        alert(`${name} quantity changed to ${newValue}`);
    }

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
                        values={range(1, 6)}
                        selectedValue={1}
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
`;

const ImageContainer = styled.div`
    position: relative;
    min-height: 211px;
    width: 256px;
    flex-shrink: 0;

    & img {
        object-fit: cover;
    }
`;

const CartItemDescription = styled.div`
    color: var(--text-dark-2);
    display: flex;
    flex-direction: column;
    padding: 16px 16px 24px 32px;
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
`;
