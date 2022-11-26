import React from 'react';
import css from './Resume.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Res} from "./res/Res";
import {Title} from "../00-Common/components/title/Title";
import { TfiAlignJustify } from "react-icons/tfi";
import {Slide} from "react-awesome-reveal";

export const Resume = () => {
    const lorem = 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua.'
    return (
        <div id={"resume"} className={css.skillsBlock}>

            <div className={`${styleContainer.container} ${css.skillsContainer}`}>
                <Slide triggerOnce direction={"up"}>
                <Title description={"5 + years experience"} title={"MY RESUME"}/>
                </Slide>

                <div className={css.skills}>
                    <Res title={"HTML"} description={lorem}><TfiAlignJustify className={css.icon}/></Res>
                    <Res title={"JS"} description={lorem}><TfiAlignJustify className={css.icon}/></Res>
                    <Res title={"BlaBla"} description={lorem}><TfiAlignJustify className={css.icon}/></Res>
                    <Res title={"GYGY"} description={lorem}><TfiAlignJustify className={css.icon}/></Res>
                    <Res title={"AlyoBla"} description={lorem}><TfiAlignJustify className={css.icon}/></Res>
                    <Res title={"AlyoBla"} description={lorem}><TfiAlignJustify className={css.icon}/></Res>
                </div>
            </div>
        </div>
    );
};


