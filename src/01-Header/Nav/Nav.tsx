import React from 'react';
import css from './Nav.module.scss';
import { Link } from 'react-scroll';

export const Nav = () => {
  return (
    <ul className={css.nav}>
      <Link spy activeClass={css.active} className={css.item} smooth={true} delay={50} to={'home'}>
        HOME
      </Link>
      <Link spy activeClass={css.active} className={css.item} smooth={true} delay={50} to={'skills'}>
        SKILLS
      </Link>
      <Link spy activeClass={css.active} className={css.item} smooth={true} delay={50} to={'works'}>
        WORKS
      </Link>
      <Link spy activeClass={css.active} className={css.item} smooth={true} delay={50} to={'resume'}>
        RESUME
      </Link>
      {/*<Link spy activeClass={css.active} className={css.item} smooth={true} delay={50} to={'blog'}>*/}
      {/*  BLOG*/}
      {/*</Link>*/}
      <Link spy activeClass={css.active} className={css.item} smooth={true} delay={50} to={'contacts'}>
        CONTACTS
      </Link>
    </ul>
  );
};
