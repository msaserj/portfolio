import React from 'react';
import css from './Main.module.css'
import styleContainer from '../Common/styles/Container.module.css'

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