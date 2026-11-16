import { useState } from "react";
import { FiltersPanel } from "../../features/filters/components/FiltersPanel/FiltersPanel";
import { QuestionsSection } from "../../features/questions/components/QuestionsSection/QuestionsSection";
import { useQuestions } from "../../features/questions/hooks/useQuestions";


export function QuestionsPage() {

    const [page, setPage] = useState(1);
    const {isLoading, isError, questions, totalPages} = useQuestions(page);

    return (
        <main>
            <QuestionsSection 
                isLoading={isLoading} 
                isError={isError} 
                questions={questions} 
                totalPages={totalPages} 
                currentPage={page} 
                onPageChange={setPage}
            />
            <FiltersPanel/>
        </main>
    )
}
