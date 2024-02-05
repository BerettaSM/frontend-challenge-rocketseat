import React from 'react';
import { CartContext } from '@/context';

export function useCart() {
    return React.useContext(CartContext);
}
