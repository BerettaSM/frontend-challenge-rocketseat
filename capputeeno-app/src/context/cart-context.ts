import React from 'react';
import { Product, ProductInCart } from '@/types/models';

interface CartContext {
    products: ProductInCart[];
    quantity: number;
    subtotal: number;
    deliveryFee: number;
    singleProductLimit: number;
    addProduct(product: Product): void;
    removeProduct(id: string): void;
    changeProductQuantity(id: string, newQuantity: number): void;
}

export const CartContext = React.createContext({} as CartContext);
