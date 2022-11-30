import React from 'react';
import css from "./Options.module.scss";
import {LiBtn} from "../../00-Common/components/LinkButton/LiBtn";
import {FiGithub, FiLinkedin, FiTwitter} from "react-icons/fi";
import {FaReact} from "react-icons/fa";
import {SiSass, SiTypescript} from "react-icons/si";

export const Options = () => {
    return (
        <div className={css.options}>
            <div>
                <h3 className={css.optionsHeader}>FIND ME:</h3>
                <ul className={css.ul}>
                    <LiBtn title={"LinkedIn"} blank pointer link={"https://www.linkedin.com/in/msaserj"}><FiLinkedin/></LiBtn>
                    <LiBtn title={"GitHub"} blank pointer link={"https://github.com/msaserj"}><FiGithub/></LiBtn>
                    <LiBtn title={"Twitter"} blank pointer link={"https://www.twitter.com"}><FiTwitter/></LiBtn>
                </ul>
            </div>
            <div>
                <h3 className={css.optionsHeader}>BEST SKILLS:</h3>
                <ul className={css.ul}>
                    <LiBtn title={"React"}><FaReact style={{color: "#139cff"}}/></LiBtn>
                    <LiBtn title={"SCSS"}><SiSass style={{color: "#cc0092"}}/></LiBtn>
                    <LiBtn title={"TS"}><SiTypescript style={{color: "#0048ff"}}/></LiBtn>
                </ul>
            </div>

        </div>
    );
};
