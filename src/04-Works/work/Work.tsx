import React, {FC, useState} from 'react';
import css from './Work.module.scss'
import {FiArrowUpRight} from "react-icons/fi";
import {Fade} from "react-awesome-reveal";
import {Modal} from "../../00-Common/modal/Modal/Modal";


type WorkPropsType = {
    title: string
    url: string
    image: string
}

export const Work: FC<WorkPropsType> = ({title, image, url}) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className={css.work}>
            <Fade triggerOnce>
                <div className={css.imgBlock} >
                    <img onClick={() => setOpened(true)} className={css.image} src={image} alt="portfolio"/>
                </div>
                <div className={css.projectInfo}>
                    <span className={css.typeProject}>EXTERNAL LINK</span>
                    <a className={css.link} href={url} target="_blank">
                        <span className={css.projectTitle}>{title} <FiArrowUpRight className={css.arrow}/></span>
                    </a>
                    {/*<button className={styles.button} onClick={() => setOpened(true)}>*/}
                    {/*    open complex animation modal*/}
                    {/*</button>*/}
                </div>

                <Modal opened={opened} onClose={() => setOpened(false)}>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                    <h2>Complex animation content</h2>
                </Modal>
            </Fade>
        </div>
    );
};
