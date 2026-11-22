import { COMPLEXITY_OPTIONS, RATING_OPTIONS } from "../../constants";
import { FilterGroup } from "../FilterGroup/FilterGroup";
import { SearchInput } from "../SearchInput/SearchInput";

export function FiltersPanel({ filters, onFiltersChange }) {
    return (
        <aside>
            <SearchInput/>
            <FilterGroup 
                title="Уровень сложности"
                options={COMPLEXITY_OPTIONS}
                selected={filters.complexity}
                onChange={(value) => onFiltersChange('complexity', value)}
            />
            <FilterGroup
                title="Рейтинг"
                options={RATING_OPTIONS}
                selected={filters.rating}
                onChange={(value) => onFiltersChange('rating', value)}
            />
        </aside>
    )
}