import React from 'react';
import {Slide} from "react-awesome-reveal";
import css from "./Educationl.module.scss"

export const Education = () => {
    return (
        <>
            <Slide triggerOnce direction={"up"}>
                <h1>Educational</h1>
            </Slide>
            <div className={css.content}>
                <div>1</div>
                <div>2</div>
            </div>
        </>
    );
};
