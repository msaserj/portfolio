import React from 'react';
import css from './Nav.module.scss'

export const Nav = () => {
    return (
        <div >
            <ul className={css.nav}>
                <li className={css.item}><a href="#home">HOME</a></li>
                <li className={css.item}><a href="#skills">SKILLS</a></li>
                <li className={css.item}><a href="#portfolio">PORTFOLIO</a></li>
                <li className={css.item}><a href="#resume">RESUME</a></li>
                <li className={css.item}><a href="#blog">BLOG</a></li>
                <li className={css.item}><a href="#contacts">Contacts</a></li>
            </ul>
        </div>
    );
};
