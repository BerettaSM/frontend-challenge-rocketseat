import styled from 'styled-components';

import { CartIcon } from './icons';
import { VisuallyHidden } from '.';

export function CartButton() {

    const items = 2;
    const cartStatus = items > 0 ? `${items} items selecionados` : 'vazio';

    return (
        <Wrapper>
            <CartIcon />
            <VisuallyHidden>Seu carrinho - ${cartStatus}</VisuallyHidden>
            <ItemCounter role='presentation'>{items}</ItemCounter>
        </Wrapper>
    );
}

const Wrapper = styled.button`
    align-items: center;
    background-color: inherit;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: relative;
    height: 42px;
    width: 42px;
`;

const ItemCounter = styled.span`
    background-color: var(--delete-color);
    bottom: 0;
    border-radius: 50%;
    color: #fff;
    font-size: 10px;
    height: 18px;
    line-height: 18px;
    position: absolute;
    right: 0;
    width: 18px;
`;
