import { useId, useState } from "react";
import { QuestionMeta } from "../QuestionMeta/QuestionMeta";

export function QuestionItem({ title, answer, rating, complexity }) {

    const [isOpen, setIsOpen] = useState(false);
    const questionInfoId = useId();

    return (
        <li>
            <h3>
                <button type="button" aria-expanded={isOpen} aria-controls={questionInfoId} onClick={() => setIsOpen(prev => !prev)}>
                    <span>{title}</span>
                    <span aria-hidden="true"> шеврон</span>
                </button>
            </h3>
            <div id={questionInfoId} hidden={!isOpen}>
                <QuestionMeta rating={rating} complexity={complexity}/>
                <div dangerouslySetInnerHTML={{__html: answer}}/>
            </div>
        </li>
    )
}