// Сколько страниц показывать слева и справа от текущей
const SIBLINGS = 2;

// Маркер многоточия, чтобы не писать строку '…' в нескольких местах
export const ELLIPSIS = '…';

export function getPageRange(currentPage, totalPages) {
    // Шаг 0. Крайний случай: страниц нет (данные ещё не пришли)
    if (totalPages === 0) return [];

    // Шаг 1. Границы окна вокруг текущей страницы
    const windowStart = Math.max(1, currentPage - SIBLINGS);
    const windowEnd = Math.min(currentPage + SIBLINGS, totalPages);

    const result = [];

    // Шаг 2. Первая страница и левое многоточие
    if (windowStart !== 1) result.push(1)
    if (windowStart - 1 >= 2) result.push(ELLIPSIS);

    // Шаг 3. Страницы окна: от windowStart до windowEnd включительно
    for (let page = windowStart; page <= windowEnd; page++) {
        result.push(page);
    }

    // Шаг 4. Правое многоточие и последняя страница (зеркально шагу 2)
    if (totalPages - windowEnd >= 2) result.push(ELLIPSIS);
    if (windowEnd !== totalPages) result.push(totalPages);

    return result;
}
