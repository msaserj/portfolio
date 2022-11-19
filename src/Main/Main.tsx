import React from 'react';
import css from './Main.module.scss'
import styleContainer from '../Common/styles/Container.module.scss'

export const Main = () => {
    return (
        <div className={css.mainBlock}>
            <div className={styleContainer.container}>
                <div className={css.text}>
                    <span>WELCOME TO MY WORLD</span>
                    <h1>I am Sergei Minko!</h1>
                    <h3>FrontEnd Developer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate
                        accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci labore sit
                        veritatis vero tempore sequi at sed facere dolore. Quae obcaecati eius quasi doloribus
                        illum minus fugit.</p>

                    <div>
                        <ul>
                            <li className={css.skill}>L</li>
                            <li className={css.skill}>F</li>
                            <li className={css.skill}>I</li>
                        </ul>
                    </div>
                </div>
                <div className={css.photo}>Photo</div>
            </div>

        </div>
    );
};
