import React from 'react';
import css from './Resume.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Title} from "../00-Common/components/title/Title";
import {Slide} from "react-awesome-reveal";
import {ResumeNav} from "./ResumeNav/ResumeNav";
import {Route, Routes} from "react-router-dom";
import {ProfSkills} from "./ProfSkills/ProfSkills";
import {Experience} from "./Experience/Experience";
import {Interview} from "./Interview/Interview";
import {Education} from "./Education/Education";

export const Resume = () => {
    // const lorem = 'Lorem ipsum dolor sit amet, ' +
    //     'consectetur adipiscing elit, ' +
    //     'sed do eiusmod tempor incididunt ut ' +
    //     'labore et dolore magna aliqua.'
    return (
        <div id={"resume"} className={css.resumeBlock}>

            <div className={`${styleContainer.container} ${css.resumeContainer}`}>
                <Slide triggerOnce direction={"up"}>
                    <Title description={"5 + years experience"} title={"MY RESUME"}/>
                </Slide>
                <div className={css.contentContainer}>
                    <ResumeNav/>
                    <div className={css.contentBlock}>
                        <Routes>
                            <Route path="/education" element={<Education/>}/>
                            <Route path="/profskills" element={<ProfSkills/>}/>
                            <Route path="/experience" element={<Experience/>}/>
                            <Route path="/interview" element={<Interview/>}/>
                        </Routes>

                    </div>
                </div>
            </div>
        </div>
    );
};


