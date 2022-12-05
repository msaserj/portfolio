import React from 'react';
import css from "./ResumeItem.module.scss";

export type ResumeItemType = {
    title: string
    years: string
    rate: string
    description: string
}

export const ResumeItem: React.FC<ResumeItemType> = (
    {title, years, rate, description}
) => {
    return (
        <div className={css.treeBlock}>
            <div className={css.inner}>
                <div className={css.innerInfo}>
                    <div className={css.info}>
                        <h3>{title}</h3>
                        <span>{years}</span>
                    </div>
                    <div className={css.rate}>
                        <span>{rate}</span>
                    </div>
                </div>
                <p className={css.description}>{description}</p>
            </div>
        </div>
    );
};
