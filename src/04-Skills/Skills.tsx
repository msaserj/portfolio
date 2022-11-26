import React from 'react';
import css from './Skills.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../00-Common/components/title/Title";
import { TfiAlignJustify } from "react-icons/tfi";

export const Skills = () => {
    const lorem = 'Lorem ipsum dolor sit amet, '
    return (
        <div id={"skills"} className={css.skillsBlock}>

            <div className={`${styleContainer.container} ${css.skillsContainer}`}>
                <div>
                    <Title description={"Features"} title={"WHAT I DO"}/>
                </div>


                <div className={css.skills}>
                    <Skill title={"HTML"} description={lorem}><TfiAlignJustify className={css.icon}/></Skill>
                    <Skill title={"JS"} description={lorem}><TfiAlignJustify className={css.icon}/></Skill>
                    <Skill title={"BlaBla"} description={lorem}><TfiAlignJustify className={css.icon}/></Skill>
                    <Skill title={"GYGY"} description={lorem}><TfiAlignJustify className={css.icon}/></Skill>
                    <Skill title={"AlyoBla"} description={lorem}><TfiAlignJustify className={css.icon}/></Skill>
                    <Skill title={"AlyoBla"} description={lorem}><TfiAlignJustify className={css.icon}/></Skill>
                </div>
            </div>
        </div>
    );
};


