import styles from "./QuestionMeta.module.css";

export function QuestionMeta({ rating, complexity }) {
    return (
        <dl className={styles.meta}>
            <div className={styles.pair}>
                <dt className={styles.term}>Рейтинг:</dt>
                <dd className={styles.value}>{rating}</dd>
            </div>
            <div className={styles.pair}>
                <dt className={styles.term}>Сложность:</dt>
                <dd className={styles.value}>{complexity}</dd>
            </div>
        </dl>
    )
}