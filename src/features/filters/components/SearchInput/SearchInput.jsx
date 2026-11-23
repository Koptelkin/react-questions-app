import { useEffect, useState } from "react";
import { SearchIcon } from "../../../../shared/ui/SearchIcon/SearchIcon";
import { useDebounce } from "../../../../shared/hooks/useDebounce";
import styles from "./SearchInput.module.css";

export function SearchInput({ onSearchChange, value }) {

    const [inputValue, setInputValue] = useState(value);

    const debouncedValue = useDebounce(inputValue);

    useEffect(() => {
        const debouncedSearch = debouncedValue.trim()
        if (debouncedSearch !== value) onSearchChange(debouncedSearch)
    }, [debouncedValue, onSearchChange, value])

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <form className={styles.form} role="search" onSubmit={(event) => event.preventDefault()}>
            <SearchIcon className={styles.icon}/>
            <input
                className={styles.input}
                placeholder="Введите текст для поиска"
                type="search" 
                aria-label="Поиск по вопросам"
                onChange={handleInputChange}
                value={inputValue}
            />
        </form>
    )
}