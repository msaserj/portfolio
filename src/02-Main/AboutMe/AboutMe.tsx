import React from 'react';
import css from "./AboutMe.module.scss";
import {FindMeBlock} from "../../00-Common/components/FindMeBlock/FindMeBlock";
import {BestSkillsBlock} from "../../00-Common/components/BestSkillsBlock/BestSkillsBlock";

export const AboutMe = () => {
    return (
        <div className={css.options}>

            <h3 className={css.header}>About Me</h3>
            <p>Hi I am a Front-End developer & I can build your website as you want.
                I have two years of experience in Frontend and building a SPA with React/Redux/TypeScript in a
                team, three years of experience with HTML, CSS, JavaScript.
                5 years of commercial experience in IT.
            </p>
            <p>
                I can design and build business logic for Your web application.
            </p>

            {/*<div className={css.skills}>*/}
            <BestSkillsBlock/>
            <FindMeBlock/>

            {/*</div>*/}

        </div>
    );
};
