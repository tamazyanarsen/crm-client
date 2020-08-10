export function getProductTypeByCode(code: number): string {
    switch (code) {
        case 0:
            return 'Позиция';
        case 1:
            return 'Набор';
        case 2:
            return 'Прочее';
    }
}
