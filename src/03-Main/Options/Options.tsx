import React from 'react';
import css from "./Options.module.scss";
import {LiBtn} from "../../00-Common/components/LinkButton/LiBtn";
import {FiFacebook, FiLinkedin, FiTwitter} from "react-icons/fi";

export const Options = () => {
    return (
        <div className={css.options}>
            <div>
                <h3 className={css.optionsHeader}>FIND ME:</h3>
                <ul className={css.ul}>
                    <LiBtn pointer link={"https://www.linkedin.com/in/msaserj/"}><FiLinkedin/></LiBtn>
                    <LiBtn pointer link={"https://www.linkedin.com/in/msaserj/"}><FiFacebook/></LiBtn>
                    <LiBtn pointer link={"https://www.linkedin.com/in/msaserj/"}><FiTwitter/></LiBtn>
                </ul>
            </div>
            <div>
                <h3 className={css.optionsHeader}>BEST SKILLS:</h3>
                <ul className={css.ul}>
                    <LiBtn link={""}><FiLinkedin/></LiBtn>
                    <LiBtn link={""}><FiFacebook/></LiBtn>
                    <LiBtn link={""}><FiTwitter/></LiBtn>
                </ul>
            </div>

        </div>
    );
};
