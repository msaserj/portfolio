import React, {FC} from 'react';
import css from './Work.module.scss'
import {FiArrowRight} from "react-icons/fi";

type WorkPropsType = {
    title: string

    image: string
}

export const Work: FC<WorkPropsType> = ({title, image}) => {
    return (
        <div className={css.work}>
            <div className={css.imgBlock}>
                <img src={image} alt="portfolio"/>
            </div>
            <div className={css.projectInfo}>

                <span className={css.typeProject}>EXTERNAL LINK</span>
                <a className={css.link} href="#">
                    <h3 className={css.projectTitle}>{title}</h3>
                    <FiArrowRight className={css.arrow}/>
                </a>

            </div>

        </div>
    );
};
