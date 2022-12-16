import React from 'react';
import css from "./AboutMe.module.scss";
import {FindMeBlock} from "../../00-Common/components/FindMeBlock/FindMeBlock";
import {BestSkillsBlock} from "../../00-Common/components/BestSkillsBlock/BestSkillsBlock";

export const AboutMe = () => {
    return (
        <div className={css.options}>

            <h3 className={css.header}>About Me</h3>
            <p>Hi I am a Front-End developer & I can build your website as you want.
                I can customize plugin & wordpress theme.
                And I have two years of experience in figma.
                Now I am able to design your portfolio.</p>
            <p>
                I have three years of experience with HTML, CSS, JavaScript.
                And I can Design Your web application.
            </p>

            {/*<div className={css.skills}>*/}
            <BestSkillsBlock/>
            <FindMeBlock/>

            {/*</div>*/}

        </div>
    );
};
