import React, {FC} from 'react';
import css from './Work.module.scss'
import {FiArrowUpRight} from "react-icons/fi";

type WorkPropsType = {
    title: string

    image: string
}

export const Work: FC<WorkPropsType> = ({title, image}) => {
    return (
        <div className={css.work}>
            <div className={css.imgBlock}>
                <img className={css.image} src={image} alt="portfolio"/>
            </div>
            <div className={css.projectInfo}>

                <span className={css.typeProject}>EXTERNAL LINK</span>
                <a className={css.link} href="#">
                    <span className={css.projectTitle}>{title} <FiArrowUpRight className={css.arrow}/></span>
                </a>

            </div>

        </div>
    );
};
