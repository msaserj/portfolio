import React from 'react';
import {Slide} from "react-awesome-reveal";
import css from "./Educationl.module.scss"

export const Education = () => {
    return (
        <div className={css.education}>
            <Slide triggerOnce direction={"up"}>
                <h1>Educational</h1>
            </Slide>
            <div className={css.content}>
                <div className={css.Tree}>
                    <div className={css.treeBlock}>
                        <div className={css.inner}>
                            <h3>Block</h3>
                            <h3>Block</h3>
                            <p>Higher education is tertiary education leading to award of an academic degree.
                                Higher education, also called post-secondary education.</p>
                        </div>
                    </div>
                    <div className={css.treeBlock}>
                        <div className={css.inner}>
                            <h3>Block</h3>
                            <h3>Block</h3>
                            <p>Higher education is tertiary education leading to award of an academic degree.
                                Higher education, also called post-secondary education.</p>
                        </div>
                    </div>
                    <div className={css.treeBlock}>
                        <div className={css.inner}>
                            <h3>Block</h3>
                            <h3>Block</h3>
                            <p>Higher education is tertiary education leading to award of an academic degree.
                                Higher education, also called post-secondary education.</p>
                        </div>
                    </div>


                </div>
                <div className={css.Tree}>
                    <div className={css.treeBlock}>
                        <div className={css.inner}>
                            <h3>Block</h3>
                            <h3>Block</h3>
                            <p>Higher education is tertiary education leading to award of an academic degree.
                                Higher education, also called post-secondary education.</p>
                        </div>
                    </div>
                    <div className={css.treeBlock}>
                        <div className={css.inner}>
                            <h3>Block</h3>
                            <h3>Block</h3>
                            <p>Higher education is tertiary education leading to award of an academic degree.
                                Higher education, also called post-secondary education.</p>
                        </div>
                    </div>
                    <div className={css.treeBlock}>
                        <div className={css.inner}>
                            <h3>Block</h3>
                            <h3>Block</h3>
                            <p>Higher education is tertiary education leading to award of an academic degree.
                                Higher education, also called post-secondary education.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
