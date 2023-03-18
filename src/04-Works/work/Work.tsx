import React, { FC, useState } from 'react';
import css from './Work.module.scss';
import { FiArrowUpRight } from 'react-icons/fi';
import { Fade } from 'react-awesome-reveal';
import { Modal } from '../../00-Common/modal/Modal/Modal';
import { ModalContent } from './ModalContent/ModalContent';
import { WorkDataType } from '../Works';

type WorkPropsType = {
  title: string;
  image: string;
  linkType: string;
  data: WorkDataType;
};

export const Work: FC<WorkPropsType> = ({ title, image, linkType, data }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div onClick={() => setOpened(true)} className={css.work}>
        <Fade triggerOnce>
          <div className={css.imgBlock}>
            <img className={css.image} src={image} alt="portfolio" />
          </div>
          <div className={css.projectInfo}>
            <span className={css.typeProject}>{linkType}</span>
            <span className={css.link}>
              <span className={css.projectTitle}>
                {title} <FiArrowUpRight className={css.arrow} />
              </span>
            </span>
          </div>
        </Fade>
      </div>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <ModalContent data={data} />
      </Modal>
    </>
  );
};
