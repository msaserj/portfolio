import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skils} from "./Skills/Skils";
import {Works} from "./Works/Works";
import {Remote} from "./Remote/Remote";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skils/>
            <Works/>
            <Remote/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;


