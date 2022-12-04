import React from 'react';
import css from './Footer.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'

export const Footer = () => {
    return (
        <div className={css.footerBlock}>
            <div className={`${styleContainer.container} ${css.footerContainer}`}>
                <h2 className={css.title}>Sergei Minko</h2>
                <div className={css.social} >
                    <a href="https://github.com/msaserj">GitHub</a>
                    <a href="https://www.linkedin.com/in/msaserj">LinkedIn</a>
                    <a href="https://www.facebook.com/msaserj">Facebook</a>
                </div>
                <h3 className={css.rights}>
                    © 2022. This layout is borrowed from <a href="https://themeforest.net/user/rainbow-themes">Rainbow-Themes</a>
                </h3>
            </div>
        </div>
    );
};


