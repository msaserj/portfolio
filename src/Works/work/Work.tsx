import React, {FC} from 'react';
import css from './Work.module.scss'

type WorkPropsType = {
    title: string
    description: string
    style: any
}

export const Work:FC<WorkPropsType> = ({title, description,style}) => {
    return (
        <div className={css.work}>
            <div className={css.imgBlock} style={{backgroundImage: `url(${style})`}}>
                <button onClick={()=>alert("Wake Up, Neo")} className={css.button}>See</button>
            </div>
            <div className={css.projectInfo}>
                <h3 className={css.projectTitle}>{title}</h3>
                <span className={css.description}>{description}</span>
            </div>

        </div>
    );
};
