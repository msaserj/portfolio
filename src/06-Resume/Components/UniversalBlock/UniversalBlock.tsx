import React from 'react';
import css from "./UniversalBlock.module.scss"
import {TreeTitle} from "../TreeTitle/TreeTitle";
import {ResumeItem} from "../ResumeItem/ResumeItem";

export const UniversalBlock = () => {
    return (
        <div className={css.mainResume}>
            <div className={css.content}>
                <div className={css.columnTree}>
                    <TreeTitle description={"2007-2010"} title={"Company Education"}/>
                    <div className={css.tree}>
                        <ResumeItem/>
                        <ResumeItem/>
                        <ResumeItem/>
                    </div>
                </div>
                <div className={css.columnTree}>
                    <TreeTitle description={"2007-2010"} title={"Company Education"}/>
                    <div className={css.tree}>
                        <ResumeItem/>
                        <ResumeItem/>
                        <ResumeItem/>
                    </div>
                </div>
            </div>
        </div>
    );
};
