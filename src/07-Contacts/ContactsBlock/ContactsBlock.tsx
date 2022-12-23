import React from 'react';
import css from "./ContactsBlock.module.scss"
import {FindMeBlock} from "../../00-Common/components/FindMeBlock/FindMeBlock";

export const ContactsBlock = () => {
    const picSrc = "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
    return (
        <div className={css.contacts}>
            <div className={css.imageBlock}>
                <img className={css.image} src={picSrc} alt="connect"/></div>
            <div>
                <h2>Sergei Minko</h2>
                <span className={css.description}>React Frontend Developer</span>
            </div>
            <div>
                <p className={css.text}>I am available for work.
                    Contact me through the contact form or write to me on social networks.</p>
            </div>
            <div>
                <span className={css.span}>Location: <span style={{color: "#B0B3B4FF"}}>Georgia, Tbilisi</span></span>
            </div>
            <div>
                <span className={css.span}>Phone: <a className={css.a} href="tel:+995598706084">+995-598-70-60-84</a></span>
            </div>
            <div>
                <span className={css.span}>Email: <a className={css.a}
                                                     href="mailto: serg.ks@gmail.com">serg.ks@gmail.com</a></span>
            </div>
            <FindMeBlock/>
        </div>
    );
};

