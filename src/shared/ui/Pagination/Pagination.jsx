import { getPageRange, ELLIPSIS } from "../../lib/getPageRange"
import styles from "./Pagination.module.css";

// Стрелка влево; для «вперёд» та же иконка, развёрнутая через transform
function ArrowIcon({ isNext }) {
    return (
        <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            style={isNext ? { transform: 'scaleX(-1)' } : undefined}
        >
            <path d="M15 9H3M3 9L8 4M3 9L8 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export function Pagination({ totalPages, currentPage, onPageChange }) {

    const pages = getPageRange(currentPage, totalPages);

    if (totalPages === 0) return null;

    return (
        <nav aria-label="Пагинация">
            <ul className={styles.list}>
                <li>
                    <button
                        className={styles.arrow}
                        aria-label="Предыдущая страница"
                        type="button"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ArrowIcon/>
                    </button>
                </li>
                {pages.map((page, index) => {

                    if (page === ELLIPSIS) return (
                        <li key={`ellipsis-${index}`}>
                            <span className={styles.ellipsis} aria-hidden="true">{page}</span>
                        </li>
                    )

                    return (<li key={page}>
                        <button
                            className={styles.page}
                            onClick={() => onPageChange(page)}
                            type="button"
                            aria-current={page === currentPage ? 'page' : undefined}
                        >
                            {page}
                        </button>
                    </li>)
                })}
                <li>
                    <button
                        className={styles.arrow}
                        aria-label="Следующая страница"
                        type="button"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <ArrowIcon isNext/>
                    </button>
                </li>
            </ul>
        </nav>
    )
}