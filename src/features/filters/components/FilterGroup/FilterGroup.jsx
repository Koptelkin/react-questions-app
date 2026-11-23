import { useState } from "react";
import { Chip } from "../../../../shared/ui/Chip/Chip";
import styles from "./FilterGroup.module.css";

export function FilterGroup({ title, options, selected, onChange, multiple, collapsedCount }) {

    const [isCollapsed, setIsCollapsed] = useState(true);
    
    const collapsedOptions = options.slice(0, collapsedCount);

    const isOptionSelected = (value) => {
        if (multiple) {
            return selected.includes(value)
        } else {
            return selected === value
        }
    }

    const handleChipClick = (value) => {
        if (multiple) {
            if (isOptionSelected(value)) {
                onChange(selected.filter((selectedOption) => selectedOption !== value))
            } else {
                onChange([...selected, value])
            }
        } else {
            if (isOptionSelected(value)) {
                onChange(null)
            } else {
                onChange(value)
            }
        }
    }

    return (
        <fieldset className={styles.group}>
            <legend className={styles.legend}>{title}</legend>
            <ul className={styles.options}>
                {(isCollapsed ? collapsedOptions : options).map(option => (
                    <li key={option.value}>
                        <Chip 
                            label={option.label} 
                            onClick={() => handleChipClick(option.value)} 
                            isSelected={isOptionSelected(option.value)}
                        />
                    </li>
                ))}
            </ul>
            {options.length > collapsedCount && <button
                className={styles.toggle}
                type="button"
                aria-expanded={!isCollapsed} 
                onClick={() => setIsCollapsed(prev => !prev)}
            >
                {isCollapsed ? 'Посмотреть всё' : 'Свернуть'}
            </button>}
        </fieldset>
    )
}