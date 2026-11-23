import styles from "./Chip.module.css";

export function Chip({ label, isSelected, onClick}) {
    return (
        <button className={styles.chip} aria-pressed={isSelected} onClick={onClick} type="button">
            {label}
        </button>
    )
}