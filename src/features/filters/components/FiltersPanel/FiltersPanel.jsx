import { COMPLEXITY_OPTIONS, RATING_OPTIONS } from "../../constants";
import { FilterGroup } from "../FilterGroup/FilterGroup";
import { RemoteFiltersGroups } from "../RemoteFiltersGroups/RemoteFiltersGroups";
import { SearchInput } from "../SearchInput/SearchInput";

export function FiltersPanel({ filters, onFiltersChange }) {
    
    return (
        <aside>
            <SearchInput 
                onSearchChange={(value) => onFiltersChange('search', value)}
                value={filters.search}
            />
            <RemoteFiltersGroups
                filters={filters}
                onFiltersChange={onFiltersChange}
            />
            <FilterGroup 
                title="Уровень сложности"
                options={COMPLEXITY_OPTIONS}
                selected={filters.complexity}
                onChange={(value) => onFiltersChange('complexity', value)}
                multiple={true}
            />
            <FilterGroup
                title="Рейтинг"
                options={RATING_OPTIONS}
                selected={filters.rating}
                onChange={(value) => onFiltersChange('rating', value)}
                multiple={true}
            />
        </aside>
    )
}