import { useId, useState } from "react";
import { QuestionMeta } from "../QuestionMeta/QuestionMeta";
import styles from "./QuestionItem.module.css";

export function QuestionItem({ title, answer, rating, complexity }) {

    const [isOpen, setIsOpen] = useState(false);
    const questionInfoId = useId();

    return (
        <li className={styles.item}>
            <h3 className={styles.heading}>
                <button
                    className={styles.toggle}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={questionInfoId}
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    <span className={styles.title}>{title}</span>
                    {/* Декоративный шеврон: состояние озвучивает aria-expanded */}
                    <svg className={styles.chevron} aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </h3>
            <div className={styles.body} id={questionInfoId} hidden={!isOpen}>
                <QuestionMeta rating={rating} complexity={complexity}/>
                <div className={styles.answer} dangerouslySetInnerHTML={{__html: answer}}/>
            </div>
        </li>
    )
}