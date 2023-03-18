import React from 'react';
import css from './ModalContent.module.scss';
import { LiBtn } from '../../../00-Common/components/LinkButton/LiBtn';
import { WorkDataType } from '../../Works';

type ContentModalType = { data: WorkDataType };

export const ModalContent: React.FC<ContentModalType> = ({ data }) => {
  return (
    <div className={css.modalContent}>
      {/*Header with main photo, description and links to projects*/}
      <div className={css.titleBlock}>
        <div className={css.imageBlock}>
          <img className={css.image} src={data.headerBlock.thumbImg} alt="A" />
        </div>
        <div className={css.titleText}>
          <h1 className={css.projectTitle}>{data.headerBlock.header}</h1>
          <p className={css.description}>{data.headerBlock.description}</p>
          <div></div>
          <div className={css.buttonBlock}>
            {data.headerBlock.gitHubLink && (
              <LiBtn blank pointer link={data.headerBlock.gitHubLink}>
                View in Github
              </LiBtn>
            )}{' '}
            {/*GitHub button*/}
            {data.headerBlock.demoLink && (
              <LiBtn blank pointer link={data.headerBlock.demoLink}>
                View Demo
              </LiBtn>
            )}{' '}
            {/*View Demo*/}
            {data.headerBlock.storyBookLink && (
              <LiBtn blank pointer link={data.headerBlock.storyBookLink}>
                Storybook
              </LiBtn>
            )}{' '}
            {/*Storybook*/}
          </div>
        </div>
      </div>
      {/*Technical description, design, used technologies*/}
      <div className={css.techDescriptionBlock}>
        <div className={css.uList}>
          {!!data.techDescription.technologies.length && <h2 className={css.uListHeader}>Technologies</h2>}
          <ul>
            {data.techDescription.technologies.map((li, index) => {
              return <li key={index}>{li}</li>;
            })}
          </ul>
        </div>
        <div className={css.uList}>
          {!!data.techDescription.design.length && <h2 className={css.uListHeader}>Design</h2>}
          <ul>
            {data.techDescription.design.map((li, index) => {
              return <li key={index}>{li}</li>;
            })}
          </ul>
        </div>
      </div>

      {/*Resume for current project*/}
      <div className={css.resumeBlock}>
        <p className={css.description} dangerouslySetInnerHTML={{ __html: data.resume }} />
      </div>
      {/*Gallery: photos and screenshots */}
      <div className={css.galleryBlock}>
        {data.gallery.map((img, index) => {
          return (
            <div key={index} className={css.imageBlock}>
              <img className={css.image} src={img} alt="screenShot" />
            </div>
          );
        })}
      </div>
      {/*Additional description and notes.*/}
      <div className={css.addDescription}>
        <p className={css.description}>{data.addDescription}</p>
      </div>
    </div>
  );
};
