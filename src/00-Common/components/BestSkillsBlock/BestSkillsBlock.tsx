import React from 'react';
import css from "../FindMeBlock/FindMeBlock.module.scss";
import {LiBtn} from "../LinkButton/LiBtn";
import {FaReact} from "react-icons/fa";
import {SiMaterialui, SiRedux, SiSass, SiStorybook, SiTypescript} from "react-icons/si";

export const BestSkillsBlock = () => {
    return (
        <div>
            <h3 className={css.header}>Best Skills:</h3>
            <ul className={css.links}>
                <LiBtn title={"React"}><FaReact style={{color: "#5ed3f3"}}/></LiBtn>
                <LiBtn title={"Redux/Redux-toolkit"}><SiRedux style={{color: "#764abc"}}/></LiBtn>
                <LiBtn title={"TS"}><SiTypescript style={{color: "#2f74c0"}}/></LiBtn>
                <LiBtn title={"SCSS"}><SiSass style={{color: "#c66394"}}/></LiBtn>
                <LiBtn title={"MaterialUI"}><SiMaterialui style={{color: "#0073e6"}}/></LiBtn>
                <LiBtn title={"Storybook"}><SiStorybook style={{color: "#ff4785"}}/></LiBtn>
            </ul>
        </div>
    );
};
