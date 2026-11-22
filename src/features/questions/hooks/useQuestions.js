import { useEffect, useState } from "react";
import { fetchQuestions } from "../api/fetchQuestions"

export const useQuestions = (page, filters) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const result = await fetchQuestions(page, filters, controller.signal);
                setQuestions(result.questions);
                setTotalPages(result.totalPages);
            } catch (error) {
                if (controller.signal.aborted) return;
                console.error(error);
                setIsError(true);
            } finally {
                if (!controller.signal.aborted) setIsLoading(false);
            }
        }
        fetchData();

        return () => controller.abort();
    }, [page, filters])

    return {isLoading, isError, questions, totalPages} 
}