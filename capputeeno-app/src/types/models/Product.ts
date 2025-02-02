export interface Product {
    id: string;
    name: string;
    image_url: string;
    price_in_cents: number;
    category: string;
    description: string;
}

export interface ProductInCart extends Product {
    quantity: number;
}
