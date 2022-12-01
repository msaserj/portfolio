import React from 'react';
import css from './Works.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Work} from "./work/Work";
import {Title} from "../00-Common/components/title/Title";
import socialPic from "../00-Common/assets/image/social-network.png"
import todoPic from "../00-Common/assets/image/todolist.png"
import cardsPic from "../00-Common/assets/image/cardList.png"
import githubPic from "../00-Common/assets/image/github_hero_2.webp"

import {Slide} from "react-awesome-reveal";


export const Works = () => {

    const todoUrl = "https://msaserj.github.io/it-inc-todolist/"
    const socialUrl = "https://msaserj.github.io/it-inc-socialnetwork/"
    const cardsUrl = "https://msaserj.github.io/it-inc-fridayproj/"
    const githubUrl = "https://github.com/msaserj"

    return (
        <div id={"works"} className={css.worksBlock}>
            <div className={`${styleContainer.container} ${css.worksContainer}`}>
                <Slide triggerOnce direction={"up"}>
                    <div>
                        <Title description={"Visit my portfolio"} title={"My works"}/>
                    </div>
                </Slide>
                <div className={css.works}>
                    <Work image={socialPic} title={"Social Network"} url={socialUrl}/>
                    <Work image={todoPic} title={"Todolist with MUI"} url={todoUrl}/>
                    <Work image={cardsPic} title={"Learning by Cards"} url={cardsUrl}/>
                    <Work image={githubPic} title={"Awesome Project"} url={githubUrl}/>
                </div>
            </div>
        </div>
    );
};


