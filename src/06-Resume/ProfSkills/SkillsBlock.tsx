import React from 'react';
import css from "./SkillsBlock.module.scss"
import {TreeTitle} from "../TreeTitle/TreeTitle";
import {Fade} from 'react-awesome-reveal';
import {SkillBar, SkillBarType} from "./SkillBar/SkillBar";

export type SkillBlockType = {
    resumeBlock: {
        left: leftType
        right: rightType
    }
}
type leftType = {
    years: string
    title: string
    items: Array<SkillBarType>
}
type rightType = {
    years: string
    title: string
    items: Array<SkillBarType>
}


export const SkillsBlock: React.FC<SkillBlockType> = (
    {resumeBlock}
) => {
    const {left, right} = resumeBlock

    return (
        <div className={css.mainSkill}>
            <div className={css.content}>
                <div className={css.columnTree}>
                    <Fade delay={500} duration={2000} >
                        <TreeTitle title={left.title} years={left.years}/>
                        {left.items.map((skill, key)=>
                            <SkillBar key={key} title={skill.title} percent={skill.percent}/>)}

                    </Fade>
                </div>
                <div className={css.columnTree}>
                    <Fade delay={1000} duration={2000} >
                        <TreeTitle title={right.title} years={right.years}/>
                        {right.items.map((skill, key)=>
                            <SkillBar key={key} title={skill.title} percent={skill.percent}/>)}
                    </Fade>
                </div>
            </div>
        </div>
    );
};