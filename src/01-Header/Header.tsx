import React, {useState} from 'react';
import css from './Header.module.scss'
import photo from '../00-Common/assets/image/photo.jpg'
import {Slide} from "react-awesome-reveal";
import {Nav} from "./Nav/Nav";
import {Button} from "../00-Common/components/Button/Button";
import {BurgerNav} from "./BurgerNav/BurgerNav";
import {FiMenu} from "react-icons/fi";


export const Header = () => {

    const [menu, setMenu] = useState(false)
    const menuHandler = () => {
        setMenu(!menu)
    }
    const onBlurHandler = () => {
        setTimeout(() => {
            setMenu(false)
        }, 500)

    }
    return (
        <>
            <header className={css.header}>
                <div className={css.photoBlock}>
                    <a href="https://msaserj.ru">
                        <img src={photo} alt="MyPhoto"/>
                        <span>MSASERJ</span>
                    </a>
                </div>
                <div>
                    <Button onBlur={onBlurHandler} className={css.menuButton} onClick={menuHandler}><FiMenu/></Button>

                    <Slide direction={"up"}>
                        <Nav/>
                    </Slide>
                </div>
            </header>
            {menu && <BurgerNav/>}
        </>
    );
};
