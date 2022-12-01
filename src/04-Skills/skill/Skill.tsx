import React, {ReactNode} from 'react';
import css from './Skill.module.scss'
import {FiArrowRight} from "react-icons/fi";



type SkillPropsType = {
    title: string
    description: string
    children: ReactNode
}

export const Skill = (props: SkillPropsType) => {
    return (
        // <Slide triggerOnce direction={"up"}>
            <div className={css.skill}>
                <div className={css.icon}>{props.children}</div>
                <h3>{props.title}</h3>
                <span className={css.description}>{props.description}</span>
                <div><FiArrowRight className={css.arrow}/></div>
            </div>
        // </Slide>
    );
};
