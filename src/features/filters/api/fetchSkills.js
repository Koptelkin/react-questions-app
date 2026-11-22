import { API_BASE_URL } from "../../../shared/api/config";

export const fetchSkills = async (controllerSignal) => {

    const urlParams = new URLSearchParams({
        limit: 100
    })

    const response = await fetch(API_BASE_URL + `/skills?${urlParams.toString()}`, {
        signal: controllerSignal
    })
    if (!response.ok) {
        throw new Error(`Ошибка при выполнении запроса: ${response.status}`)
    }
    const body = await response.json();
    const skills = body.data.filter((skill) => skill.createdBy === null)
    const result = skills.map((skill) => ({
        value: skill.id,
        label: skill.title.trim(),
        icon: skill.imageSrc
    }));
    return result;
}