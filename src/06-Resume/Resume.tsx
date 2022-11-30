import React from 'react';
import css from './Resume.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Title} from "../00-Common/components/title/Title";
import {Slide} from "react-awesome-reveal";
import {ResumeNav} from "./ResumeNav/ResumeNav";
import {Route, Routes} from "react-router-dom";
import jsonState from "../state/state.json"
import {ResumeBlock} from "./ResumeBlock/ResumeBlock";
import {SkillsBlock} from "./ProfSkills/SkillsBlock";


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
                            <Route path="/" element={<ResumeBlock resumeBlock={jsonState.resume.education}/>}/>
                            <Route path="/profskills" element={<SkillsBlock resumeBlock={jsonState.resume.skills}/>}/>
                            <Route path="/experience" element={<ResumeBlock resumeBlock={jsonState.resume.experience}/>}/>
                            <Route path="/interview" element={<ResumeBlock resumeBlock={jsonState.resume.interview}/>}/>
                        </Routes>
                        ResumeBlock

                    </div>
                </div>
            </div>
        </div>
    );
};


