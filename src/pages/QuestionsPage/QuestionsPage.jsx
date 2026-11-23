import { useState } from "react";
import { FiltersPanel } from "../../features/filters/components/FiltersPanel/FiltersPanel";
import { QuestionsSection } from "../../features/questions/components/QuestionsSection/QuestionsSection";
import { useQuestions } from "../../features/questions/hooks/useQuestions";
import { INITIAL_FILTERS } from "../../features/filters/constants";
import styles from "./QuestionsPage.module.css";


export function QuestionsPage() {

    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState(INITIAL_FILTERS);
    const {isLoading, isError, questions, totalPages} = useQuestions(page, filters);

    const handleFiltersChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
        setPage(1);
    }

    return (
        <main className={styles.page}>
            <QuestionsSection 
                isLoading={isLoading} 
                isError={isError} 
                questions={questions} 
                totalPages={totalPages} 
                currentPage={page} 
                onPageChange={setPage}
            />
            <FiltersPanel filters={filters} onFiltersChange={handleFiltersChange}/>
        </main>
    )
}
