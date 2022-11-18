import React from 'react';
import css from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import photo from '../Common/assets/image/photo_fc.jpg'

export const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.photoBlock}>
                <a href="https://msaserj.com">
                    <img src={photo} alt="MyPhoto"/>
                    <span>MSASERJ</span>
                </a>
            </div>
            <Nav/>
        </div>
    );
};
