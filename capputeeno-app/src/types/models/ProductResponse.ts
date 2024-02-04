import { Product } from '.';

export interface ProductResponse {
    data: {
        allProducts: Product[];
    };
}
