import React from 'react';
import css from './Remote.module.scss'
import styleContainer from '../Common/styles/Container.module.scss'


export const Remote = () => {


    return (
        <div className={css.remoteBlock}>
            <div className={`${styleContainer.container} ${css.remoteContainer}`}>
                <h2 className={css.title}>I'm considering remote work.</h2>
                <button className={css.button}>Hire me</button>
            </div>
        </div>
    );
};


