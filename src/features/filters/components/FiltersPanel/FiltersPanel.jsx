import { FilterGroup } from "../FilterGroup/FilterGroup";
import { SearchInput } from "../SearchInput/SearchInput";

export function FiltersPanel() {
    return (
        <aside>
            <SearchInput/>
            <FilterGroup/>
        </aside>
    )
}