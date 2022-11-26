import React from 'react';
import css from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {
    return (<>
        <ul className={css.nav}>
            <li className={css.item}><a href="src/01-Header/Nav/Nav#home">HOME</a></li>
            <li className={css.item}><a href="src/01-Header/Nav/Nav#skills">SKILLS</a></li>
            <li className={css.item}><a href="src/01-Header/Nav/Nav#works">WORKS</a></li>
            <li className={css.item}><a href="src/01-Header/Nav/Nav#resume">RESUME</a></li>
            <li className={css.item}><a href="src/01-Header/Nav/Nav#blog">BLOG</a></li>
            {/*<li className={css.item}><a href="#contacts">Contacts</a></li>*/}
            <Link activeClass={css.active}
                  className={css.item}
                  spy={true}
                  smooth={true}
                  delay={50}
                // isDynamic={true}
                  ignoreCancelEvents={false}
                  to={"contacts"}>CONTACTS</Link>
        </ul>
    </>

    );
};
