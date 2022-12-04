import React from 'react';
import css from './App.module.scss';
import {Header} from "./01-Header/Header";
import {Main} from "./02-Main/Main";
import {Skills} from "./03-Skills/Skills";
import {Works} from "./04-Works/Works";
import {Blog} from "./06-Blog/Blog";
import {Contacts} from "./07-Contacts/Contacts";
import {Footer} from "./08-Footer/Footer";
import {Resume} from "./05-Resume/Resume";
import {FiArrowUp} from "react-icons/fi";
import {Link} from "react-scroll";


function App() {

    return (
        <div className={css.App}>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Resume/>
            <Blog/>
            <Contacts/>
            <Footer/>
            <Link spy activeClass={css.active} className={css.relative} smooth={true} delay={50} to={"home"}>
                <div className={css.backToTop}>
                    <FiArrowUp/>
                </div>
            </Link>

        </div>

    );
}

export default App;


