import React, {FC} from 'react';
import css from './Title.module.scss'
import {Fade} from "react-awesome-reveal";

type TitleProps = {
    title: string
    description?: string
}

export const Title:FC<TitleProps> = ({title, description}) => {

    return (
        <div className={css.title}>
            <Fade triggerOnce >
            <span className={css.preHeader}>{description}</span>
            <h2>{title}</h2>
            </Fade>
        </div>

    );
};


