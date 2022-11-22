import React from 'react';
import css from './Main.module.scss'
import styleContainer from '../Common/styles/Container.module.scss'
import {Slide} from "react-awesome-reveal";
import {LiBtn} from "../Common/components/LinkButton/LiBtn";
import {FiFacebook, FiLinkedin, FiTwitter} from "react-icons/fi";


export const Main = () => {
    return (
        <div className={css.mainBlock}>
            <div className={styleContainer.container}>
                <Slide direction={"down"}>
                <div className={css.text}>
                    <span>WELCOME TO MY WORLD</span>
                    <h1 className={css.myName}>Hi, I`m <span className={css.spanName}>Sergei Minko</span><br/>
                        <span className={css.span}>FrontEnd Developer</span>
                    </h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate
                        accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci labore sit
                        veritatis vero tempore sequi at sed facere dolore. Quae obcaecati eius quasi doloribus
                        illum minus fugit.</p>

                    <div className={css.options}>
                        <div>
                            <h3>Find Me</h3>
                            <ul className={css.ul}>
                                <LiBtn pointer link={"https://www.linkedin.com/in/msaserj/"}><FiLinkedin /></LiBtn>
                                <LiBtn pointer link={"https://www.linkedin.com/in/msaserj/"}><FiFacebook /></LiBtn>
                                <LiBtn pointer link={"https://www.linkedin.com/in/msaserj/"}><FiTwitter /></LiBtn>
                            </ul>
                        </div>
                        <div>
                            <h3>Best Skills</h3>
                            <ul className={css.ul}>
                                <LiBtn link={""}><FiLinkedin /></LiBtn>
                                <LiBtn link={""}><FiFacebook /></LiBtn>
                                <LiBtn link={""}><FiTwitter /></LiBtn>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className={css.photo}>Photo</div>
                </Slide>
            </div>

        </div>
    );
};
