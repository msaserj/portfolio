import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Works} from "./Works/Works";
import {Remote} from "./Remote/Remote";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {Resume} from "./Resume/Resume";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Resume/>
            <Remote/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;


