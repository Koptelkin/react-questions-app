import { Chip } from "../../../../shared/ui/Chip/Chip";

export function FilterGroup({ title, options, selected, onChange }) {

    const handleChipClick = (value) => {
        if (selected.includes(value)) {
            onChange(selected.filter((selectedOption) => selectedOption !== value))
        } else {
            onChange([...selected, value])
        }
    }

    return (
        <fieldset>
            <legend>{title}</legend>
            <ul>
                {options.map(option => (
                    <li key={option.value}>
                        <Chip 
                            label={option.label} 
                            onClick={() => handleChipClick(option.value)} 
                            isSelected={selected.includes(option.value)}
                        />
                    </li>
                ))}
            </ul>
        </fieldset>
    )
}