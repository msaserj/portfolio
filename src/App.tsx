import React from 'react';
import './App.css';
import {Header} from "./01-Header/Header";
import {Main} from "./03-Main/Main";
import {Skills} from "./04-Skills/Skills";
import {Works} from "./05-Works/Works";
import {Remote} from "./07-Remote/Remote";
import {Contacts} from "./08-Contacts/Contacts";
import {Footer} from "./09-Footer/Footer";
import {Resume} from "./06-Resume/Resume";


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


