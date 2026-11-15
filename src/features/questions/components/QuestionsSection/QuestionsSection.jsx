import { Pagination } from "../../../../shared/ui/Pagination/Pagination";
import { QuestionList } from "../QuestionList/QuestionList";

export function QuestionsSection({ isLoading, isError, questions, total }) {
    return (
        <section aria-labelledby="questions-title">
            <h1 id="questions-title">Вопросы</h1>
            <QuestionList isLoading={isLoading} isError={isError} questions={questions}/>
            <Pagination total={total}/>
        </section>
    )
}