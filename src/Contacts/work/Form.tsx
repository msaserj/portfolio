import React from 'react';
import css from './Form.module.scss'
import {LiBtn} from "../../Common/components/LinkButton/LiBtn";
import {FiFacebook, FiLinkedin, FiTwitter} from "react-icons/fi";


export const Form = () => {
    return (
        <div className={css.formBlock}>
            <div className={css.contacts}>
                <div className={css.imageBlock}>
                    <img className={css.image}
                         src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
                         alt="connect"/></div>
                <div>
                    <h2>Sergei Minko</h2>
                    <span>React Frontend Developer</span>
                </div>

                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s</p>
                </div>

                <div>
                    <span className={css.span}>Phone: <a className={css.a} href="tel: +123456789">+123456789</a></span>
                </div>
                <div>
                    <span className={css.span}>Email: <a className={css.a} href="mailto: serg.ks@gmail.com">serg.ks@gmail.com</a></span>
                </div>
                <div>
                    <h3>Find Me:</h3>
                    <ul className={css.links}>
                        <LiBtn link={"https://www.linkedin.com/in/msaserj/"}><FiLinkedin /></LiBtn>
                        <LiBtn link={"https://www.linkedin.com/in/msaserj/"}><FiFacebook /></LiBtn>
                        <LiBtn link={"https://www.linkedin.com/in/msaserj/"}><FiTwitter /></LiBtn>
                    </ul>
                </div>

            </div>
            <form className={css.form} onSubmit={e => e}>
                <input className={css.input} type="text" value={'Your name'}/>
                <input className={css.input} type="email" value={'email'}/>
                <input className={css.input} type="text" value={'subject'}/>
                <textarea className={css.textArea} value={'your message'} onChange={e => e}>Your message</textarea>
                <button className={css.button}>Submit</button>
            </form>
        </div>
    );
};
