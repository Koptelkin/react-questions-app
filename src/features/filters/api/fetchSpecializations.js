import { API_BASE_URL } from "../../../shared/api/config";

export const fetchSpecializations = async (controllerSignal) => {

    const urlParams = new URLSearchParams({
        limit: 100
    })

    const response = await fetch(API_BASE_URL + `/specializations?${urlParams.toString()}`, {
        signal: controllerSignal
    })
    if (!response.ok) {
        throw new Error(`Ошибка при выполнении запроса: ${response.status}`)
    }
    const body = await response.json();
    const specializations = body.data.filter((specialization) => {
        return specialization.createdBy === null && specialization.imageSrc === null
    })
    const result = specializations.map((specialization) => ({
        value: specialization.id,
        label: specialization.title,
    }));
    return result;

}