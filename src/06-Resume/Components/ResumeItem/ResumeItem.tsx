import React from 'react';
import css from "./ResumeItem.module.scss";

export const ResumeItem = () => {
    return (
        <div className={css.treeBlock}>
            <div className={css.inner}>
                <div className={css.innerInfo}>
                    <div className={css.info}>
                        <h3>State University</h3>
                        <span>2007-2010</span>
                    </div>
                    <div className={css.rate}>
                        <span>3.90/50</span>
                    </div>
                </div>

                <p>adaddd</p>
            </div>
        </div>
    );
};
