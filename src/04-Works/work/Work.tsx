import React, {FC} from 'react';
import css from './Work.module.scss'
import {FiArrowUpRight} from "react-icons/fi";
import {Fade} from "react-awesome-reveal";

type WorkPropsType = {
    title: string
    url: string
    image: string
}

export const Work: FC<WorkPropsType> = ({title, image, url}) => {
    return (
        <div className={css.work}>
            <Fade triggerOnce>
                <div className={css.imgBlock}>
                    <img className={css.image} src={image} alt="portfolio"/>
                </div>
                <div className={css.projectInfo}>
                    <span className={css.typeProject}>EXTERNAL LINK</span>
                    <a className={css.link} href={url} target="_blank">
                        <span className={css.projectTitle}>{title} <FiArrowUpRight className={css.arrow}/></span>
                    </a>
                </div>
            </Fade>
        </div>
    );
};
