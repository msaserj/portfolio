import React from 'react';
import css from "./FindMeBlock.module.scss";
import {LiBtn} from "../LinkButton/LiBtn";
import {FiFacebook, FiGithub, FiLinkedin} from "react-icons/fi";

export const FindMeBlock = () => {
    return (
        <div>
            <h3 className={css.header}>Find Me:</h3>
            <ul className={css.links}>
                <LiBtn title={"LinkedIn"} pointer link={"https://www.linkedin.com/in/msaserj/"}><FiLinkedin/></LiBtn>
                <LiBtn title={"GitHub"} pointer link={"https://github.com/msaserj"}><FiGithub/></LiBtn>
                <LiBtn title={"Facebook"} pointer link={"https://www.facebook.com/msaserj"}><FiFacebook/></LiBtn>
            </ul>
        </div>
    );
};
