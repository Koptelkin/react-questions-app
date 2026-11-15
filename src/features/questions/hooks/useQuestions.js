import { useEffect, useState } from "react";
import { fetchQuestions } from "../api/fetchQuestions"

export const useQuestions = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchQuestions();
                setQuestions(result.questions);
                setTotal(result.total);
            } catch (error) {
                console.error(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    return {isLoading, isError, questions, total} 
}