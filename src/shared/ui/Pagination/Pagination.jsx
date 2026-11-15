export function Pagination() {
    return (
        <nav aria-label="Пагинация">
            <ul>
                <li>
                    <button aria-current="page">1</button>
                </li>
                <li>
                    <button>2</button>
                </li>
                <li>
                    <button>3</button>
                </li>
                <li>
                    <button>4</button>
                    
                </li>
                <li>
                    <button>5</button>
                </li>
                <li>
                    <span aria-hidden="true">...</span>
                </li>
                <li>
                    <button>Последняя страница</button>
                </li>
            </ul>
        </nav>
    )
}