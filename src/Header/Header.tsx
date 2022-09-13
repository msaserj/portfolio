import React from 'react';
import css from './Header.module.scss'
import {Nav} from "../Nav/Nav";

export const Header = () => {
    return (
        <div className={css.header}>
            <Nav/>
        </div>
    );
};
