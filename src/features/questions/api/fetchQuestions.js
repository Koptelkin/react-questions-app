import DOMPurify from 'dompurify';
import { PAGE_SIZE } from '../constants';
import { API_BASE_URL } from '../../../shared/api/config';

// Разворачивает диапазоны вида 'начало-конец' в отдельные числа:
// ['1-3', '9-10'] → [1, 2, 3, 9, 10]   
const expandRanges = (ranges) => {
    return ranges.flatMap((range) => {
        const [start, end] = range.split('-').map(Number);
        const numbers = [];
        for (let n = start; n <= end; n++) {
            numbers.push(n)
        }
        return numbers;
    })
}

export const fetchQuestions = async (page, filters, controllerSignal) => {

    const urlParams = new URLSearchParams({
        page: page,
        limit: PAGE_SIZE,
        ...(filters.search.trim().length > 0 && {title: filters.search.trim()}),
        ...(filters.specialization !== null && {specializationId: filters.specialization}),
        ...(filters.skills.length > 0 && {skills: filters.skills.join(',')}),
        ...(filters.complexity.length > 0 && {complexity: expandRanges(filters.complexity).join(',')}),
        ...(filters.rating.length > 0 && {rate: filters.rating.join(',')})
    })

    const response = await fetch(`${API_BASE_URL}/questions/public-questions?${urlParams.toString()}`, {
        signal: controllerSignal
    });
    if (!response.ok) {
        throw new Error(`Ошибка при выполнении запроса: ${response.status}`)
    }
    const body = await response.json();
    const questions = body.data.map((question) => {
        return {
            id: question.id,
            title: question.title,
            //так как рендерю сырую разметку с сервера на всякий случай чищу от скриптов
            answer: DOMPurify.sanitize(question.shortAnswer),
            rating: question.rate,
            complexity: question.complexity
        }
    })
    const totalPages = Math.ceil(body.total / PAGE_SIZE);
    return {questions, totalPages};
}