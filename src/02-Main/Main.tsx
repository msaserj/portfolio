import React from 'react';
import css from './Main.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Fade} from "react-awesome-reveal";
import {MePhoto} from "./MePhoto/MePhoto";
import {AboutMe} from "./AboutMe/AboutMe";


export const Main = () => {
    return (
        <section id={"home"} className={css.mainBlock}>
            <div className={`${styleContainer.container} ${css.mainContainer}`}>
                        <MePhoto/>
                <Fade triggerOnce direction={"left"}>
                        <AboutMe/>
                </Fade>
            </div>
        </section>
    );
};
