import React, {FC} from 'react';
import css from './TreeTitle.module.scss'

type TitleProps = {
    title: string
    description?: string
}

export const TreeTitle:FC<TitleProps> = ({title, description}) => {

    return (
        <div className={css.title}>
            <span className={css.preHeader}>{description}</span>
            <h2>{title}</h2>
        </div>

    );
};


