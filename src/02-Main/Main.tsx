import React from 'react';
import css from './Main.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Slide} from "react-awesome-reveal";
import {Options} from "./Options/Options";
import {AboutMe} from "./AboutMe/AboutMe";
import bgp from "../00-Common/assets/image/code.jpg"


export const Main = () => {
    return (
        <section id={"home"} className={css.mainBlock}>
            <img className={css.bgp} src={bgp} alt=""/>
            <div className={`${styleContainer.container} ${css.mainContainer}`}>

                <Slide triggerOnce direction={"down"}>
                    <div className={css.photo}>
                        {/*<img src={mainPhoto} alt="mainPhoto"/>*/}
                    </div>
                </Slide>
                <Slide triggerOnce direction={"down"}>
                    <div className={css.aboutMe}>
                        <AboutMe/>
                        <Options/>
                    </div>
                </Slide>
            </div>
        </section>
    );
};
