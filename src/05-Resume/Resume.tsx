import React from 'react';
import css from './Resume.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Title} from "../00-Common/components/title/Title";
import {Slide} from "react-awesome-reveal";
import {ResumeNav} from "./ResumeNav/ResumeNav";
import {Route, Routes} from "react-router-dom";

import {ResumeBlock} from "./ResumeBlock/ResumeBlock";
import {SkillsBlock} from "./ProfSkills/SkillsBlock";
import jsonState from "../state/state"


export const Resume = () => {
    return (
        <section id={"resume"} className={css.resumeBlock}>

            <div className={`${styleContainer.container} ${css.resumeContainer}`}>
                <Slide triggerOnce direction={"up"}>
                    <Title description={"5 + years experience"} title={"MY RESUME"}/>
                </Slide>
                <div className={css.contentContainer}>
                    <ResumeNav/>
                    <div className={css.contentBlock}>
                        <Routes>
                            <Route path="/" element={<ResumeBlock resumeBlock={jsonState.education}/>}/>
                            <Route path="/profskills" element={<SkillsBlock resumeBlock={jsonState.skills}/>}/>
                            <Route path="/experience" element={<ResumeBlock resumeBlock={jsonState.experience}/>}/>
                            <Route path="/interview" element={<ResumeBlock resumeBlock={jsonState.interview}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </section>
    );
};


