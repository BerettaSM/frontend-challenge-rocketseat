import { FilterTypes, PriorityType } from '@/types/enums';

export function getCategoryByType(type: FilterTypes) {
    switch (type) {
        case FilterTypes.MUGS:
            return 'mugs';
        case FilterTypes.SHIRTS:
            return 't-shirts';
        default:
            return '';
    }
}

export function getTypeByCategory(category: string) {
    switch (category) {
        case 'mugs':
            return FilterTypes.MUGS;
        case 't-shirts':
            return FilterTypes.SHIRTS;
        default:
            return FilterTypes.ALL;
    }
}

export function getFieldByPriority(priority: PriorityType) {
    switch (priority) {
        case PriorityType.NEW:
            return { field: 'created_at', order: 'ASC' };
        case PriorityType.PRICE_INCREASE:
            return { field: 'price_in_cents', order: 'ASC' };
        case PriorityType.PRICE_DECREASE:
            return { field: 'price_in_cents', order: 'DESC' };
        case PriorityType.POPULARITY:
        default:
            return { field: 'sales', order: 'DSC' };
    }
}

export function createQuery(type: FilterTypes, priority: PriorityType | null) {
    if (type === FilterTypes.ALL && priority === PriorityType.POPULARITY)
        return `
            query {
                allProducts(sortField: "sales", sortOrder: "DSC") {
                    id
                    name
                    price_in_cents
                    image_url
                }
            }
    `;
    const categoryFilter = getCategoryByType(type);
    const { field, order } = getFieldByPriority(priority ?? PriorityType.POPULARITY);
    return `
        query {
            allProducts(
                sortField: "${field}",
                sortOrder: "${order}",
                ${categoryFilter ? `filter: { category: "${categoryFilter}"}` : ''}
            ) {
                id
                name
                price_in_cents
                image_url
                category
            }
        }
    `;
};

export function createQueryById(id: string) {
    return `
        query {
            Product(id: "${id}"){
                id
                name
                description
                category
                price_in_cents
                image_url
            }
        }
    `
}
