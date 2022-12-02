import React from 'react';
import css from './Main.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Slide} from "react-awesome-reveal";
import {Options} from "./Options/Options";
import {AboutMe} from "./AboutMe/AboutMe";


export const Main = () => {
    return (
        <div id={"home"} className={css.mainBlock}>
            <div className={`${styleContainer.container} ${css.mainContainer}`}>

                <Slide triggerOnce direction={"up"}>
                    <div className={css.photo}>Photo</div>
                </Slide>

                <Slide triggerOnce direction={"up"}>
                    <div className={css.aboutMe}>
                        <AboutMe/>
                        <Options/>
                    </div>

                </Slide>

            </div>

        </div>
    );
};
