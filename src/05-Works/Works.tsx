import React from 'react';
import css from './Works.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Work} from "./work/Work";
import {Title} from "../00-Common/components/title/Title";
import todoPic from "../00-Common/assets/image/todo.png"
import {Slide} from "react-awesome-reveal";



export const Works = () => {
    return (
        <div id={"works"} className={css.worksBlock}>
            <div className={`${styleContainer.container} ${css.worksContainer}`}>
                <Slide triggerOnce direction={"up"}>
                <div>
                    <Title description={"Visit my portfolio and keep your feedback"} title={"My works"}/>
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


