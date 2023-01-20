import React from 'react';
import css from "./ModalContent.module.scss"
import image from "../../../00-Common/assets/image/SocialNetwork/social-network.png"
import {Button} from "../../../00-Common/components/Button/Button";
import {LiBtn} from "../../../00-Common/components/LinkButton/LiBtn";

export const ModalContent = () => {
    return (
        <div className={css.modalContent}>
            {/*Header with main photo, description and links to projects*/}
            <div className={css.titleBlock}>
                <div className={css.imageBlock}>
                    <img className={css.image} src={image} alt="A"/>
                </div>
                <div className={css.titleText}>
                    <h1 className={css.projectTitle}>Restaurant Mobile Application Figma Design.</h1>
                    <p className={css.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                    </p>
                    <div>
                    </div>
                    <div className={css.buttonBlock}>
                        <LiBtn blank pointer link={""}>View in Github</LiBtn>   {/*GitHub button*/}
                        <LiBtn blank pointer link={""}>View Demo</LiBtn> {/*View Demo*/}
                    </div>
                </div>
            </div>
            {/*Technical description, design, used technologies*/}
            <div className={css.techDescriptionBlock}>
                <div className={css.uList}>
                    <h2 className={css.uListHeader}>Header</h2>
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                        <li>four</li>
                        <li>five</li>
                    </ul>
                </div>
                <div className={css.uList}>
                    <h2 className={css.uListHeader}>Header</h2>
                    <ul>
                        <li>eins</li>
                        <li>zwei</li>
                        <li>drei</li>
                        <li>vier</li>
                        <li>fünf</li>
                    </ul>
                </div>
            </div>

            {/*Resume for current project*/}
            <div className={css.resumeBlock}>
                <p className={css.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                </p>
            </div>
            {/*Gallery: photos and screenshots */}
            <div className={css.galleryBlock}>
                <div className={css.imageBlock}>
                    <img className={css.image} src={image} alt="screenShot"/>
                </div>
                <div className={css.imageBlock}>
                    <img className={css.image} src={image} alt="screenShot"/>
                </div>
                <div className={css.imageBlock}>
                    <img className={css.image} src={image} alt="screenShot"/>
                </div>
                <div className={css.imageBlock}>
                    <img className={css.image} src={image} alt="screenShot"/>
                </div>
            </div>
            {/*Additional description and notes.*/}
            <div className={css.addDescription}>
                <p className={css.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                </p>
            </div>
        </div>
    );
};