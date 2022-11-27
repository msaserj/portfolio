import React from 'react';
import {Slide} from "react-awesome-reveal";
import css from "./Educationl.module.scss"
import {TreeTitle} from "../TreeTitle/TreeTitle";

export const Education = () => {
    return (
        <div className={css.education}>


            <div className={css.content}>
                <Slide  direction={"up"}>
                <div className={css.columnTree}>
                    <TreeTitle description={"2007-2010"} title={"Company Experience"}/>
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
                </Slide>
                <div className={css.columnTree}>
                    <TreeTitle description={"2007-2010"} title={"Company Experience"}/>
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
        </div>
    );
};
