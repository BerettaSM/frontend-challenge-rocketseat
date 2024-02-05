import { CartContext } from '@/context';
import { useLocalStorage } from '@/hooks';
import { Product, ProductInCart } from '@/types/models';

const CART_KEY = 'cart';
const SINGLE_PRODUCT_LIMIT = 5;
const DELIVERY_FEE = 4000;

interface CartContextProviderProps {
    children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const { storage, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
        CART_KEY,
        []
    );

    const subtotal = storage.reduce(
        (acc, product) => acc + product.price_in_cents,
        0
    );

    function addProduct(product: Product) {
        let productInCart = storage.find((p) => p.id === product.id);
        if (productInCart) {
            changeProductQuantity(product.id, productInCart.quantity + 1);
        } else {
            updateLocalStorage([...storage, { ...product, quantity: 1 }]);
        }
    }

    function removeProduct(id: string) {
        const filteredStorage = storage.filter((product) => product.id !== id);
        updateLocalStorage(filteredStorage);
    }

    function changeProductQuantity(id: string, newQuantity: number) {
        if (newQuantity < 1) {
            removeProduct(id);
            return;
        }
        if (newQuantity > SINGLE_PRODUCT_LIMIT) {
            throw new Error(
                `O carrinho já possui um limite de ${SINGLE_PRODUCT_LIMIT} deste item.`
            );
        }
        const productIndex = storage.findIndex((product) => product.id === id);
        if (productIndex < 0) {
            return;
        }
        const newStorage = [...storage];
        newStorage[productIndex].quantity = newQuantity;
        updateLocalStorage(newStorage);
    }

    const deliveryFee = storage.length === 0 || subtotal > 90000 ? 0 : DELIVERY_FEE;

    const context = {
        products: storage,
        quantity: storage.length,
        subtotal,
        deliveryFee,
        singleProductLimit: SINGLE_PRODUCT_LIMIT,
        addProduct,
        removeProduct,
        changeProductQuantity,
    };

    return (
        <CartContext.Provider value={context}>{children}</CartContext.Provider>
    );
}
