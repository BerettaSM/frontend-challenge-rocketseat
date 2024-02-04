'use client';

import styled from 'styled-components';

import { ProductItem } from '.';

import { range } from '@/utils/helpers';

export function ProductList() {
    return(
        <Wrapper>
            
            {range(10).map(i => (
                <ProductItem
                    key={i}
                    id='1'
                    title='Caneca de cerâmica rústica'
                    price={4780}
                    imageUrl='https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg'
                />
            ))}

        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-auto-rows: auto;
    justify-content: space-evenly;
    gap: 32px 24px;
`;
