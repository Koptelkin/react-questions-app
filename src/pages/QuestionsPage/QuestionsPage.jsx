import { FiltersPanel } from "../../features/filters/components/FiltersPanel/FiltersPanel";
import { QuestionsSection } from "../../features/questions/components/QuestionsSection/QuestionsSection";
import { useQuestions } from "../../features/questions/hooks/useQuestions";


export function QuestionsPage() {

    const {isLoading, isError, questions, total} = useQuestions();

    return (
        <main>
            <QuestionsSection isLoading={isLoading} isError={isError} questions={questions} total={total}/>
            <FiltersPanel/>
        </main>
    )
}
