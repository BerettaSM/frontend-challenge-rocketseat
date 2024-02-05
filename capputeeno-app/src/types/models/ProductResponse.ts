import { Product } from '.';

export interface ProductsResponse {
    data: {
        allProducts: Product[];
    };
}

export interface ProductResponse {
    data: {
        Product: Product;
    };
}
