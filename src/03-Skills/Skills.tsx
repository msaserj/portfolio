import React from 'react';
import css from './Skills.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../00-Common/components/title/Title";
import {TfiAlignJustify, TfiBrush, TfiDesktop} from "react-icons/tfi";
import {SiJest, SiLinux} from "react-icons/si";


export const Skills = () => {
    const lorem = [
        {
            title: "Business Logic for App",
            descr: "I create the most optimal business logic for your app."
        },
        {
            title: "Web App Development",
            descr: "Designing user interfaces for interacting with your backend server."
        },
        {
            title: "Creativity",
            descr: "If you don't have a layout for your application, " +
                "I will make the interface as user-friendly as possible. This will improve my design skills a bit."
        },
        {
            title: "Business Logic App",
            descr: "I feel that design and engineering should live harmoneously together."
        },
        {
            title: "Unit Tests",
            descr: "Your app will be more stable and you will know whats broken in app"
        },
        {
            title: "Linux",
            descr: "I use Linux systems for development, delivery and deployment of applications."
        },

    ]
    return (
        <section id={"skills"} className={css.skillsBlock}>
            <div className={`${styleContainer.container} ${css.skillsContainer}`}>
                <div>
                    <Title description={"Features"} title={"WHAT I DO"}/>
                </div>
                <div className={css.skills}>
                    <Skill title={lorem[0].title} description={lorem[0].descr}><TfiAlignJustify
                        className={css.icon}/></Skill>
                    <Skill title={lorem[1].title} description={lorem[1].descr}><TfiDesktop
                        className={css.icon}/></Skill>
                    <Skill title={lorem[2].title} description={lorem[2].descr}><TfiBrush className={css.icon}/></Skill>
                    <Skill title={lorem[3].title} description={lorem[3].descr}><TfiDesktop
                        className={css.icon}/></Skill>
                    <Skill title={lorem[4].title} description={lorem[4].descr}><SiJest className={css.icon}/></Skill>
                    <Skill title={lorem[5].title} description={lorem[5].descr}><SiLinux className={css.icon}/></Skill>
                </div>
            </div>
        </section>
    );
};


