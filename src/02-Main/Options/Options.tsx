import React from 'react';
import css from "./Options.module.scss";
import {FindMeBlock} from "../../00-Common/components/FindMeBlock/FindMeBlock";
import {BestSkillsBlock} from "../../00-Common/components/BestSkillsBlock/BestSkillsBlock";

export const Options = () => {
    return (
        <div className={css.options}>
            <FindMeBlock/>
            <BestSkillsBlock/>
        </div>
    );
};
