import React from 'react';
import css from "./AboutMe.module.scss";

export const AboutMe = () => {
    return (
        <div className={css.text}>
            <span className={css.welcome}>WELCOME TO MY WORLD</span>
            <h1 className={css.myName}>Hi, I`m <span className={css.spanName}>Sergei Minko</span><br/>
                <span className={css.spanProf}>FrontEnd Developer</span>
            </h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate
                accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci labore sit
                veritatis vero tempore sequi at sed facere dolore. Quae obcaecati eius quasi doloribus
                illum minus fugit.</p>
        </div>
    );
};
