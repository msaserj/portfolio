import React from 'react';
import css from './Works.module.scss'
import styleContainer from '../Common/styles/Container.module.scss'
import {Work} from "./work/Work";
import {Title} from "../Common/components/title/Title";
import todoPic from "./../Common/assets/image/todo.png"



export const Works = () => {
    const lorem = 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua.'


    return (
        <div className={css.worksBlock}>
            <div className={`${styleContainer.container} ${css.worksContainer}`}>
                <Title title={"My works"}/>
                <div className={css.works}>
                    <Work style={todoPic} title={"Form 1"} description={lorem}/>
                    <Work style={todoPic} title={"Form 2"} description={lorem} />
                    <Work style={todoPic} title={"Form 3"} description={lorem} />
                    <Work style={todoPic} title={"Form 4"} description={lorem} />
                </div>
            </div>
        </div>
    );
};


