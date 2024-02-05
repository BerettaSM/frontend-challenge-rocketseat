import { AxiosPromise } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { api } from '@/api';
import { createQueryById } from '@/utils/graphql';
import { ProductResponse } from '@/types/models';

function fetcher(productId: string): AxiosPromise<ProductResponse> {
    return api.post('/', {
        query: createQueryById(productId),
    });
}

export function useProduct(id: string) {
    const { data, isLoading, isError, error } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id],
        enabled: !!id,
        staleTime: 10 * 60 * 1000,
    });
    const product = data?.data.data.Product;
    return { product, isLoading, isError, error };
}
