import React, {FC} from 'react';
import css from './Title.module.scss'

type TitleProps = {
    title: string
}

export const Title:FC<TitleProps> = ({title}) => {

    return (
        <div className={css.title}>
            <h2>{title}</h2>
        </div>

    );
};


