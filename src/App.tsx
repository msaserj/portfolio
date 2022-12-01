import React from 'react';
import css from './App.module.scss';
import {Header} from "./01-Header/Header";
import {Main} from "./03-Main/Main";
import {Skills} from "./04-Skills/Skills";
import {Works} from "./05-Works/Works";
import {Remote} from "./07-Remote/Remote";
import {Contacts} from "./08-Contacts/Contacts";
import {Footer} from "./09-Footer/Footer";
import {Resume} from "./06-Resume/Resume";
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
            <Remote/>
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


