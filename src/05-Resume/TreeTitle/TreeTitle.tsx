import React, { FC } from 'react';
import css from './TreeTitle.module.scss';

type TitleProps = {
  title: string;
  years: string;
};

export const TreeTitle: FC<TitleProps> = ({ title, years }) => {
  return (
    <div className={css.title}>
      <span className={css.preHeader}>{title}</span>
      <h2>{years}</h2>
    </div>
  );
};
