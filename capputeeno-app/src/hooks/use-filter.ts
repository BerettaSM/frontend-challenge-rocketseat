import React from 'react';

import { FilterContext } from '@/context';

export function useFilter() {
    return React.useContext(FilterContext);
}
