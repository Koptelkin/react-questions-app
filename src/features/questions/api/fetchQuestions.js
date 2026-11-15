import DOMPurify from 'dompurify';

export const fetchQuestions = async () => {

    const urlParams = new URLSearchParams({
        page: 1,
        limit: 10
    })

    const response = await fetch(`https://api.yeatwork.ru/questions/public-questions?${urlParams.toString()}`);
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
    const total = body.total;
    return {questions, total};
}