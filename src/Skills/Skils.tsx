import React from 'react';
import css from './Skills.module.css'
import styleContainer from '../Common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skils = () => {
    const lorem = 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua.'
    return (
        <div className={css.skillsBlock}>
            <div className={`${styleContainer.container} ${css.skillsContainer}`}>
                <h2 className={css.title}>Skills</h2>
                <div className={css.skils}>
                    <Skill title={"HTML"} descryption={lorem}/>
                    <Skill title={"CSS"} descryption={lorem}/>
                    <Skill title={"JS"} descryption={lorem}/>
                    <Skill title={"TS"} descryption={lorem}/>
                    <Skill title={"React"} descryption={lorem}/>
                    <Skill title={"Redux"} descryption={lorem}/>
                    <Skill title={"Storybook"} descryption={lorem}/>
                    <Skill title={"TTD"} descryption={lorem}/>

                </div>
            </div>
        </div>
    );
};


