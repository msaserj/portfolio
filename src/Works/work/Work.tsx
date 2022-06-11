import React from 'react';
import css from './Work.module.css'

type WorkPrposType = {
    title: string
    descryption: string

}

export const Work = (props: WorkPrposType) => {
    return (
        <div className={css.work}>
            <div className={css.imgBlock}>
                <button className={css.button}>See</button>
            </div>
            <h3>{props.title}</h3>
            <span className={css.description}>{props.descryption}</span>
        </div>
    );
};
