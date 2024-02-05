import { Product } from '.';

export interface ProductsResponse {
    data: {
        allProducts: Product[];
    };
}
