import React from 'react';
import css from './Main.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Slide} from "react-awesome-reveal";
import {Options} from "./Options/Options";
import {AboutMe} from "./AboutMe/AboutMe";


export const Main = () => {
    return (
        <div id={"home"} className={css.mainBlock}>
            <div className={styleContainer.container}>
                <div>
                    <Slide triggerOnce direction={"left"}>
                        <AboutMe/>
                        <Options/>
                    </Slide>
                </div>
                <Slide triggerOnce direction={"right"}>
                    <div className={css.photo}>Photo</div>
                </Slide>
            </div>
        </div>
    );
};
