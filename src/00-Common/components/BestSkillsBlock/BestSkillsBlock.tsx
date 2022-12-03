import React from 'react';
import css from "../FindMeBlock/FindMeBlock.module.scss";
import {LiBtn} from "../LinkButton/LiBtn";
import {FaReact} from "react-icons/fa";
import {SiSass, SiTypescript} from "react-icons/si";

export const BestSkillsBlock = () => {
    return (
        <div>
            <h3 className={css.header}>Best Skills:</h3>
            <ul className={css.links}>
                <LiBtn title={"React"}><FaReact style={{color: "#139cff"}}/></LiBtn>
                <LiBtn title={"SCSS"}><SiSass style={{color: "#cc0092"}}/></LiBtn>
                <LiBtn title={"TS"}><SiTypescript style={{color: "#0048ff"}}/></LiBtn>
            </ul>
        </div>
    );
};
