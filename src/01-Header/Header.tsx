import React from 'react';
import css from './Header.module.scss'

import photo from '../00-Common/assets/image/photo_fc.jpg'
import {Slide} from "react-awesome-reveal";
import {Nav} from "./Nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";

export const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.photoBlock}>
                <a href="https://msaserj.com">
                    <img src={photo} alt="MyPhoto"/>
                    <span>MSASERJ</span>
                </a>
            </div>
            <Slide direction={"up"}>
                <BurgerNav />
                <Nav/>
            </Slide>

        </div>
    );
};
