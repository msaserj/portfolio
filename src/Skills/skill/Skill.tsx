import React from 'react';
import css from './Skill.module.scss'

type SkillPrposType = {
    title: string
    descryption: string
}

export const Skill = (props: SkillPrposType) => {
    return (
        <div className={css.skill}>
            <div className={css.icon}>ICON</div>
            <h3>{props.title}</h3>
            <span className={css.description}>{props.descryption}</span>
        </div>
    );
};
