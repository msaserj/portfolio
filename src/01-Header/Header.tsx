import React, { useState } from 'react';
import css from './Header.module.scss';
import photo from '../00-Common/assets/image/PortfolioImages/me.jpg';
import { Slide } from 'react-awesome-reveal';
import { Nav } from './Nav/Nav';
import { Button } from '../00-Common/components/Button/Button';
import { BurgerNav } from './BurgerNav/BurgerNav';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-scroll';

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };
  const onBlurHandler = () => {
    setTimeout(() => {
      setMenu(false);
    }, 500);
  };
  return (
    <>
      <header className={css.header}>
        <div className={css.photoBlock}>
          <Link spy activeClass={css.active} className={css.relative} smooth={true} delay={50} to={'home'}>
            <img src={photo} alt="MyPhoto" />
            <span>MSASERJ</span>
          </Link>
        </div>
        <div>
          <Button round onBlur={onBlurHandler} className={css.menuButton} onClick={menuHandler}>
            <FiMenu />
          </Button>

          <Slide direction={'up'}>
            <Nav />
          </Slide>
        </div>
      </header>
      {menu && <BurgerNav />}
    </>
  );
};
