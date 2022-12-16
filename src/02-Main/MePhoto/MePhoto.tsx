import React from 'react';
import css from "./MePhoto.module.scss";
import photo from "../../00-Common/assets/image/photo2.jpg";
import {LiBtn} from "../../00-Common/components/LinkButton/LiBtn";

export const MePhoto = () => {
    return (
        <div className={css.me}>
            <div className={css.photoBlock}>
                <img src={photo} alt="MyPhoto"/>
            </div>
            <span className={css.welcome}>WELCOME TO MY SPACE</span>
            <h1 className={css.myName}>Hi, I`m <span className={css.spanName}>Sergei Minko</span><br/>
                <span className={css.spanProf}>FrontEnd Developer</span>
            </h1>
            <p>The world is full of adventure and opportunity.<br/> Let's improve it together!</p>
            <div className={css.buttons}>
                <LiBtn  link={"./static/SergeiMinkoCV.pdf"} pointer>Download My CV</LiBtn>
            </div>

        </div>
    );
};
