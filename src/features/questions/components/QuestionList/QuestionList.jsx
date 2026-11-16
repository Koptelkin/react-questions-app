import { QuestionItem } from "../QuestionItem/QuestionItem";

export function QuestionList({ isLoading, isError, questions }) {
    if (questions.length === 0 && isLoading) return <p>Загрузка вопросов</p>
    if (isError) return <p>Ошибка при загрузке вопросов</p>
    if (questions.length === 0) return <p>Нет подходящих вопросов</p>
    return (
        <ul>
            {questions.map(question => 
                <QuestionItem
                    key={question.id}
                    title={question.title}
                    answer={question.answer}
                    rating={question.rating}
                    complexity={question.complexity}
                />)}    
        </ul>
    )
}