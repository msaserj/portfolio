import React from 'react';
import css from './Footer.module.css'
import styleContainer from '../Common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={css.footerBlock}>
            <div className={`${styleContainer.container} ${css.footerContainer}`}>
                <h2 className={css.title}>I'm considering remote work.</h2>
                <div className={css.social} >
                    <div>inst</div>
                    <div>FB</div>
                    <div>GitHub</div>
                </div>
                <h3 className={css.title}>Gnu GPL</h3>
            </div>
        </div>
    );
};


