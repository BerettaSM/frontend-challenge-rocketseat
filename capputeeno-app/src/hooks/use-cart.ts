import { ProductInCart } from '@/types/models';
import { useLocalStorage } from '.';

const CART_KEY = 'cart';
const DELIVERY_FEE = 4000;

export function useCart() {
    const { storage, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
        CART_KEY,
        []
    );

    const subtotal = storage.reduce(
        (acc, product) => acc + product.price_in_cents,
        0
    );

    function removeItem(id: string) {
        const filteredStorage = storage.filter((product) => product.id !== id);
        updateLocalStorage(filteredStorage);
    }

    function changeItemQuantity(id: string, newQuantity: number) {
        const productIndex = storage.findIndex((product) => product.id === id);
        if (productIndex < 0) {
            return;
        }
        const newStorage = [...storage];
        newStorage[productIndex].quantity = newQuantity;
        updateLocalStorage(newStorage);
    }

    return {
        products: storage,
        quantity: storage.length,
        subtotal,
        deliveryFee: storage.length > 0 ? DELIVERY_FEE : 0,
        removeItem,
        changeItemQuantity,
    };
}
