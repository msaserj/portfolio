import React from 'react';
import css from "./SkillsBlock.module.scss"
import {TreeTitle} from "../TreeTitle/TreeTitle";
import { Slide } from 'react-awesome-reveal';
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
                    <Slide triggerOnce direction={"left"}>
                        <TreeTitle title={left.title} years={left.years}/>
                        {left.items.map((skill, key)=>
                            <SkillBar key={key} title={skill.title} percent={skill.percent}/>)}

                    </Slide>
                </div>
                <div className={css.columnTree}>
                    <Slide triggerOnce direction={"right"}>
                        <TreeTitle title={right.title} years={right.years}/>
                        {right.items.map((skill, key)=>
                            <SkillBar key={key} title={skill.title} percent={skill.percent}/>)}
                    </Slide>
                </div>
            </div>
        </div>
    );
};