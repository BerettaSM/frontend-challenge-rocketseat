export function range(
    startInclusive: number,
    endExclusive?: number,
    step: number = 1
): number[] {
    if (endExclusive === undefined) {
        endExclusive = startInclusive;
        startInclusive = 0;
    }

    const result: number[] = [];
    const isIncrementing = startInclusive < endExclusive;

    if (step === 0) {
        console.warn('You passed in zero as step value. Defaulting to 1.');
        step = 1;
    }

    if ((isIncrementing && step < 0) || (!isIncrementing && step > 0)) {
        step *= -1;
    }

    for (
        let i = startInclusive;
        isIncrementing ? i < endExclusive : i > endExclusive;
        i += step
    ) {
        result.push(i);
    }

    return result;
}

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

export function formatCurrency(value: number) {
    return currencyFormatter.format(value);
}

export function getPageNumbers(
    currentPage: number,
    totalPages: number,
    maxShownButtons: number = 5
) {
    let firstShownPage = Math.max(
        1,
        currentPage - Math.floor(maxShownButtons / 2)
    );
    const lastShownPage = Math.min(
        totalPages + 1,
        firstShownPage + maxShownButtons
    );

    while (
        firstShownPage > 1 &&
        lastShownPage - firstShownPage < maxShownButtons
    ) {
        firstShownPage--;
    }

    return range(firstShownPage, lastShownPage);
}
