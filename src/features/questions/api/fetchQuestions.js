import DOMPurify from 'dompurify';
import { PAGE_SIZE } from '../constants';

export const fetchQuestions = async (page, controllerSignal) => {

    const urlParams = new URLSearchParams({
        page: page,
        limit: PAGE_SIZE,
    })

    const response = await fetch(`https://api.yeatwork.ru/questions/public-questions?${urlParams.toString()}`, {
        signal: controllerSignal
    });
    if (!response.ok) {
        throw new Error('Ошибка при выполнении запроса')
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