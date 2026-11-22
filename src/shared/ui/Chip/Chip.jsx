export function Chip({ label, isSelected, onClick}) {
    return (
        <button aria-pressed={isSelected} onClick={onClick} type="button">
            {label}
        </button>
    )
}