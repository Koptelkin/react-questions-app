import { QuestionItem } from "../QuestionItem/QuestionItem";
import styles from "./QuestionList.module.css";

export function QuestionList({ isLoading, isError, questions }) {
    if (questions.length === 0 && isLoading) return <p className={styles.status}>Загрузка вопросов</p>
    if (isError) return <p className={styles.status}>Ошибка при загрузке вопросов</p>
    if (questions.length === 0) return <p className={styles.status}>Нет подходящих вопросов</p>
    return (
        <ul className={styles.list}>
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