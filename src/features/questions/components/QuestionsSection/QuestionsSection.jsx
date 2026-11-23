import { Pagination } from "../../../../shared/ui/Pagination/Pagination";
import { QuestionList } from "../QuestionList/QuestionList";
import styles from "./QuestionsSection.module.css";

export function QuestionsSection({ isLoading, isError, questions, totalPages, currentPage, onPageChange }) {
    return (
        <section className={styles.section} aria-labelledby="questions-title">
            <h2 className={styles.title} id="questions-title">Вопросы</h2>
            <QuestionList isLoading={isLoading} isError={isError} questions={questions}/>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange}/>
        </section>
    )
}