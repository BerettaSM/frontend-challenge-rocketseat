import { AxiosPromise } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { api } from '@/api';
import { useFilter } from '.';
import { createQuery } from '@/utils/graphql';
import { ProductResponse } from '@/types/models';

const PRODUCTS_PER_PAGE = 12;

function fetcher(query: string): AxiosPromise<ProductResponse> {
    return api.post('/', { query });
}

export function useProducts() {
    const { searchTerm, type, priority, currentPage } = useFilter();
    const query = createQuery(type, priority);
    const { data, isLoading, isError, error } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority],
        staleTime: 60 * 1000,
    });
    const products = data?.data.data.allProducts;
    const filteredProducts = products?.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const sliceStart = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const sliceEnd = sliceStart + PRODUCTS_PER_PAGE;
    const slicedProducts = filteredProducts?.slice(sliceStart, sliceEnd);
    return { products: slicedProducts, isLoading, isError, error };
}
