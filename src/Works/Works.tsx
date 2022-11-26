import React from 'react';
import css from './Works.module.scss'
import styleContainer from '../Common/styles/Container.module.scss'
import {Work} from "./work/Work";
import {Title} from "../Common/components/title/Title";
import todoPic from "./../Common/assets/image/todo.png"
import {Slide} from "react-awesome-reveal";



export const Works = () => {
    const lorem = 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua.'


    return (
        <div className={css.worksBlock}>
            <div className={`${styleContainer.container} ${css.worksContainer}`}>
                <Slide triggerOnce direction={"up"}>
                <div>
                    <span className={css.preHeader}>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</span>
                    <Title title={"My works"}/>
                </div>
                    </Slide>
                <div className={css.works}>
                    <Work image={todoPic} title={"Social Network"} />
                    <Work image={todoPic} title={"Todolist with MUI"} />
                    <Work image={todoPic} title={"Learning by Cards"} />
                    <Work image={todoPic} title={"Awesome Project"} />
                </div>
            </div>
        </div>
    );
};


