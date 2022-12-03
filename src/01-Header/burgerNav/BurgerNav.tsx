import React from 'react';
import css from './BurgerNav.module.scss'
import {Link} from "react-scroll";
import {FindMeBlock} from "../../00-Common/components/FindMeBlock/FindMeBlock";

export const BurgerNav = () => {
    return (
            <div className={css.sideBlock}>
                <div className={css.text}>
                    <p>Inbio is a all in one personal portfolio WordPress theme. You can customize everything.</p>
                </div>
                <ul className={css.nav}>
                    <Link spy activeClass={css.active} className={css.item} smooth={true} delay={50} to={"home"}>HOME</Link>
                    <Link spy activeClass={css.active} className={css.item} smooth={true} delay={50}
                          to={"skills"}>SKILLS</Link>
                    <Link spy activeClass={css.active} className={css.item} smooth={true} delay={50}
                          to={"works"}>WORKS</Link>
                    <Link spy activeClass={css.active} className={css.item} smooth={true} delay={50}
                          to={"resume"}>RESUME</Link>
                    <Link spy activeClass={css.active} className={css.item} smooth={true} delay={50} to={"home"}>BLOG</Link>
                    {/*<li className={css.item}><a href="#contacts">Contacts</a></li>*/}
                    <Link spy activeClass={css.active} className={css.item} smooth={true} delay={50}
                          to={"contacts"}>CONTACTS</Link>
                </ul>
                <FindMeBlock/>
            </div>


    );
};
