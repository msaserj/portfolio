import React from 'react';
import css from "./ResumeItem.module.scss";

export type ResumeItemType = {
    itemHeader: string
    years: string
    rate: string
    itemDescription: string
}

export const ResumeItem: React.FC<ResumeItemType> = (
    {itemHeader, years, rate, itemDescription}
) => {
    return (
        <div className={css.treeBlock}>
            <div className={css.inner}>
                <div className={css.innerInfo}>
                    <div className={css.info}>
                        <h3>{itemHeader}</h3>
                        <span>{years}</span>
                    </div>
                    <div className={css.rate}>
                        <span>{rate}</span>
                    </div>
                </div>

                <p>{itemDescription}</p>
            </div>
        </div>
    );
};
