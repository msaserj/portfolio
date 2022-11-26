import React from 'react';
import css from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {
    return (<>
        <ul className={css.nav}>
            <Link activeClass={css.active} className={css.item} smooth={true} delay={50} to={"home"}>HOME</Link>
            <Link activeClass={css.active} className={css.item} smooth={true} delay={50} to={"skills"}>SKILLS</Link>
            <Link activeClass={css.active} className={css.item} smooth={true} delay={50} to={"works"}>WORKS</Link>
            <Link activeClass={css.active} className={css.item} smooth={true} delay={50} to={"resume"}>RESUME</Link>
            <Link activeClass={css.active} className={css.item} smooth={true} delay={50} to={"home"}>BLOG</Link>
            {/*<li className={css.item}><a href="#contacts">Contacts</a></li>*/}
            <Link activeClass={css.active} className={css.item} smooth={true} delay={50} to={"contacts"}>CONTACTS</Link>
        </ul>
    </>

    );
};
