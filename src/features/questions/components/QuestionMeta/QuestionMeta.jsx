export function QuestionMeta({ rating, complexity }) {
    return (
        <dl>
            <div>
                <dt>Рейтинг:</dt>
                <dd>{rating}</dd>
            </div>
            <div>
                <dt>Сложность:</dt>
                <dd>{complexity}</dd>
            </div>
        </dl>
    )
}