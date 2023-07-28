import React from 'react';
import css from './AboutMe.module.scss';
import { FindMeBlock } from '../../00-Common/components/FindMeBlock/FindMeBlock';
import { BestSkillsBlock } from '../../00-Common/components/BestSkillsBlock/BestSkillsBlock';

export const AboutMe = () => {
  return (
    <div className={css.options}>
      <h3 className={css.header}>About Me</h3>
      <p>
        Hi I am a Frontend developer & I can build your website as you want. I have 2+ years of experience in Frontend
        and building a SPA with technology stack: React, Next.JS, Redux, Redux-Toolkit, Material-UI, TypeScript, SCSS.
        5+ years of commercial experience in IT.
      </p>
      <p></p>
      <BestSkillsBlock />
      <FindMeBlock />
    </div>
  );
};
