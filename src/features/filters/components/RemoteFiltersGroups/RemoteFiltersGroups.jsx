import { FilterGroup } from "../FilterGroup/FilterGroup";
import { useFilterOptions } from "../../hooks/useFilterOptions";
import styles from "./RemoteFiltersGroups.module.css";

export function RemoteFiltersGroups({ filters, onFiltersChange}) {
    
    const {isLoading, isError, specializations, skills} = useFilterOptions();

    if (isLoading) return null;
    if (isError) return <p className={styles.error}>Произошла ошибка при загрузке. Обновите страницу</p>
    
    return (
        <>
            <FilterGroup
                title="Специализация"
                options={specializations}
                selected={filters.specialization}
                onChange={(value) => onFiltersChange('specialization', value)}
                multiple={false}
                collapsedCount={5}
            />
            <FilterGroup
                title="Навыки"
                options={skills}
                selected={filters.skills}
                onChange={(value) => onFiltersChange('skills', value)}
                multiple={true}
                collapsedCount={5}
            />
        </>
    )
}