import React, {FC, useState} from 'react';
import css from './Work.module.scss'
import {FiArrowUpRight} from "react-icons/fi";
import {Fade} from "react-awesome-reveal";
import {Modal} from "../../00-Common/modal/Modal/Modal";
import {ModalContent} from "./ModalContent/ModalContent";


type WorkPropsType = {
    title: string
    url: string
    image: string
    linkType: string
}

export const Work: FC<WorkPropsType> = ({title, image, url, linkType}) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className={css.work}>
            <Fade triggerOnce>
                <div className={css.imgBlock} >
                    <img onClick={() => setOpened(true)} className={css.image} src={image} alt="portfolio"/>
                </div>
                <div className={css.projectInfo}>
                    <span className={css.typeProject}>{linkType}</span>
                    <a className={css.link} href={url} target="_blank">
                        <span className={css.projectTitle}>{title} <FiArrowUpRight className={css.arrow}/></span>
                    </a>
                </div>

                <Modal opened={opened} onClose={() => setOpened(false)}>
                    <ModalContent/>
                </Modal>
            </Fade>
        </div>
    );
};
