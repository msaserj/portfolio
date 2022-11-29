import React from 'react';
import css from './Skills.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../00-Common/components/title/Title";
import {TfiDesktop} from "react-icons/tfi";

export const Skills = () => {
    const lorem = [
        {
            title: "Business Logic App",
            descr: "I create the most optimal business logic for your app."
        },
        {
            title: "WebApp Development",
            descr: "Designing user interfaces for interacting with your backend server."
        },
        {
            title: "Creativity",
            descr: "If you don't have a layout for your application," +
                "I will make the interface as user-friendly as possible. This will improve my design skills a bit."
        },
        {
            title: "Business Logic App",
            descr: "I create the most optimal business logic for your app."
        },
        {
            title: "WebApp Development",
            descr: "Designing user interfaces for interacting with your backend server."
        },
        {
            title: "Creativity",
            descr: "If you don't have a layout for your application," +
                "I will make the interface as user-friendly as possible. This will improve my design skills a bit."
        },

    ]
    return (
        <div id={"skills"} className={css.skillsBlock}>

            <div className={`${styleContainer.container} ${css.skillsContainer}`}>
                <div>
                    <Title description={"Features"} title={"WHAT I DO"}/>
                </div>


                <div className={css.skills}>
                    <Skill title={lorem[0].title} description={lorem[0].descr}><TfiDesktop className={css.icon}/></Skill>
                    <Skill title={lorem[1].title} description={lorem[1].descr}><TfiDesktop className={css.icon}/></Skill>
                    <Skill title={lorem[2].title} description={lorem[2].descr}><TfiDesktop className={css.icon}/></Skill>
                    <Skill title={lorem[3].title} description={lorem[3].descr}><TfiDesktop className={css.icon}/></Skill>
                    <Skill title={lorem[4].title} description={lorem[4].descr}><TfiDesktop className={css.icon}/></Skill>
                    <Skill title={lorem[5].title} description={lorem[5].descr}><TfiDesktop className={css.icon}/></Skill>
                </div>
            </div>
        </div>
    );
};


