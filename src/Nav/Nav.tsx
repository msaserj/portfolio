import React from 'react';
import css from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={css.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
};
