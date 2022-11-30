import React from 'react';
import css from "./AboutMe.module.scss";

export const AboutMe = () => {
    return (
        <div className={css.text}>
            <span className={css.welcome}>WELCOME TO MY SPACE</span>
            <h1 className={css.myName}>Hi, I`m <span className={css.spanName}>Sergei Minko</span><br/>
                <span className={css.spanProf}>FrontEnd Developer</span>
            </h1>

            <p>The world is full of adventure and opportunity.<br/> Let's improve it together!</p>

        </div>
    );
};
