import React from 'react';
import css from './ResumeItem.module.scss';

export type ResumeItemType = {
  title: string;
  subtitle: string;
  years: string;
  description: string;
};

export const ResumeItem: React.FC<ResumeItemType> = ({ title, subtitle, years, description }) => {
  return (
    <div className={css.treeBlock}>
      <div className={css.inner}>
        <div className={css.innerInfo}>
          <div className={css.info}>
            <h3>{title}</h3>
            <span>{subtitle}</span>
          </div>
          <div className={css.rate}>
            <span>{years}</span>
          </div>
        </div>
        <p className={css.description} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};
