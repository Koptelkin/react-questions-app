import { QuestionMeta } from "../QuestionMeta/QuestionMeta";

export function QuestionItem({ title, answer, rating, complexity }) {
    return (
        <li>
            <h3>
                <button aria-expanded="false" aria-controls="">
                    <span>{title}</span>
                    <span aria-hidden="true"> шеврон</span>
                </button>
            </h3>
            <QuestionMeta rating={rating} complexity={complexity}/>
            <div dangerouslySetInnerHTML={{__html: answer}}/>
        </li>
    )
}