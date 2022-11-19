import React from 'react';
import css from './Skills.module.scss'
import styleContainer from '../Common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../Common/components/title/Title";

export const Skills = () => {
    const lorem = 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua.'
    return (
        <div className={css.skillsBlock}>
            <div className={`${styleContainer.container} ${css.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={css.skills}>

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


