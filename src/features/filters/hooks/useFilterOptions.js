import { useEffect, useState } from "react";
import { fetchSpecializations } from "../api/fetchSpecializations";
import { fetchSkills } from "../api/fetchSkills";

export const useFilterOptions = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [skills, setSkills] = useState([]);
    const [specializations, setSpecializations] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const [specializationsData, skillsData] = await Promise.all([
                    fetchSpecializations(controller.signal), 
                    fetchSkills(controller.signal)
                ]);
                setSpecializations(specializationsData)
                setSkills(skillsData)
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
    }, [])

    return { isLoading, isError, specializations, skills } 
}