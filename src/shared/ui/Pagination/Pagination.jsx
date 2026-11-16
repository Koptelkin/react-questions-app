import { getPageRange, ELLIPSIS } from "../../lib/getPageRange"

export function Pagination({ totalPages, currentPage, onPageChange }) {

    const pages = getPageRange(currentPage, totalPages);

    if (totalPages === 0) return null;

    return (
        <nav aria-label="Пагинация">
            <ul>
                <li>
                    <button
                        aria-label="Предыдущая страница"
                        type="button"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >Назад</button>
                </li>
                {pages.map((page, index) => {

                    if (page === ELLIPSIS) return (
                        <li key={`ellipsis-${index}`}>
                            <span aria-hidden="true">{page}</span>
                        </li>
                    )
                    
                    return (<li key={page}>
                        <button 
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
                        aria-label="Следующая страница"
                        type="button"
                        onClick={() => onPageChange(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                    >Вперед</button>
                </li>
            </ul>
        </nav>
    )
}