import React from 'react';
import css from './Works.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Work} from "./work/Work";
import {Title} from "../00-Common/components/title/Title";
import socialPic from "../00-Common/assets/image/SocialNetwork/socialNetwork-tumb.jpg"
import todoPic from "../00-Common/assets/image/ToDoList/toDo-tumb.jpg"
import cardsPic from "../00-Common/assets/image/LearnCards/learning-tumb.jpg"
import shopPic from "../00-Common/assets/image/OnlineShop/onlineShop-tumb.jpg"
import dashboardPic from "../00-Common/assets/image/DashboardMonitor/dashBoard-tumb.jpg"
import githubPic from "../00-Common/assets/image/GitHub/github.webp"


export const Works = () => {

    const todoUrl = "https://msaserj.github.io/inc-todolist"
    const socialUrl = "https://msaserj.github.io/inc-socialnetwork"
    const cardsUrl = "https://msaserj.github.io/inc-fridayproj"
    const githubUrl = "https://github.com/msaserj"

    return (
        <section id={"works"} className={css.worksBlock}>
            <div className={`${styleContainer.container} ${css.worksContainer}`}>
                <div>
                    <Title description={"Visit my portfolio"} title={"My works"}/>
                </div>
                <div className={css.works}>
                    <Work image={socialPic} title={"Social Network"} url={socialUrl} linkType={"Gallery"}/>
                    <Work image={todoPic} title={"Todolist with MUI"} url={todoUrl} linkType={"gallery"}/>
                    <Work image={cardsPic} title={"Learning by Cards"} url={cardsUrl} linkType={"Gallery"}/>
                    <Work image={shopPic} title={"Oline Shop (In progress...)"} url={""} linkType={"Gallery"}/>
                {/*    <Work image={dashboardPic} title={"Dashboard monitoring (in progress...)"} url={""} linkType={"Gallery"}/>*/}
                {/*    <Work image={githubPic} title={"Projects on Github"} url={githubUrl} linkType={"External Link"}/>*/}
                </div>
            </div>
        </section>
    );
};


