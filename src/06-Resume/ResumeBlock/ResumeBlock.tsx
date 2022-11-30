import React from 'react';
import css from "./ResumeBlock.module.scss"
import {TreeTitle} from "../TreeTitle/TreeTitle";
import {ResumeItemType} from "../ResumeItem/ResumeItem";
import {SkillBar} from "../ProfSkills/SkillBar/SkillBar";


export type ResumeBlockType = {
    resumeBlock: {
        left: leftType
        right: rightType
    }
}

type leftType = {
    years: string
    title: string
    items: Array<ResumeItemType>
}
type rightType = {
    years: string
    title: string
    items: Array<ResumeItemType>
}

export const ResumeBlock: React.FC<ResumeBlockType> = (
    {resumeBlock}
) => {
    const {left, right} = resumeBlock

    return (
        <div className={css.mainResume}>
            <div className={css.content}>

                <div className={css.columnTree}>
                    {/*<Slide triggerOnce direction={"left"}>*/}
                        <TreeTitle title={left.title} years={left.years}/>
                        {/*<div className={css.tree}>*/}
                        {/*    <ResumeItem description={left.items[0].description} rate={left.items[0].rate}*/}
                        {/*                title={left.items[0].title} years={left.items[0].years}/>*/}
                        {/*    <ResumeItem description={left.items[1].description} rate={left.items[1].rate}*/}
                        {/*                title={left.items[1].title} years={left.items[1].years}/>*/}
                        {/*    <ResumeItem description={left.items[2].description} rate={left.items[2].rate}*/}
                        {/*                title={left.items[2].title} years={left.items[2].years}/>*/}
                        {/*</div>*/}
                        <SkillBar percent={85} title={"HTML"}/>
                        <SkillBar percent={70} title={"CSS"}/>
                        <SkillBar percent={60} title={"JS"}/>
                        <SkillBar percent={45} title={"TS"}/>
                        <SkillBar percent={70} title={"React"}/>

                    {/*</Slide>*/}
                </div>


                <div className={css.columnTree}>
                    {/*<Slide triggerOnce direction={"right"}>*/}
                        <TreeTitle title={right.title} years={right.years}/>
                        {/*<div className={css.tree}>*/}
                        {/*    <ResumeItem description={right.items[0].description} rate={right.items[0].rate}*/}
                        {/*                title={right.items[0].title} years={right.items[0].years}/>*/}
                        {/*    <ResumeItem description={right.items[1].description} rate={right.items[1].rate}*/}
                        {/*                title={right.items[1].title} years={right.items[1].years}/>*/}
                        {/*    <ResumeItem description={right.items[2].description} rate={right.items[2].rate}*/}
                        {/*                title={right.items[2].title} years={right.items[2].years}/>*/}
                        {/*</div>*/}
                        <SkillBar percent={85} title={"HTML"}/>
                        <SkillBar percent={80} title={"CSS"}/>
                        <SkillBar percent={55} title={"JS"}/>
                        <SkillBar percent={30} title={"TS"}/>
                        <SkillBar percent={70} title={"React"}/>
                    {/*</Slide>*/}
                </div>

            </div>
        </div>
    );
};
