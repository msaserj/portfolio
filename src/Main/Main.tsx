import React from 'react';
import css from './Main.module.scss'
import styleContainer from '../Common/styles/Container.module.scss'

export const Main = () => {
    return (
        <div className={css.mainBlock}>
            <div className={styleContainer.container}>
                <div className={css.text}>
                    <span>Hello!</span>
                    <h1>I am Vasya!</h1>
                    <p>FrontEnd Developer</p>
                </div>
                <div className={css.photo}>Photo</div>
            </div>
        </div>
    );
};