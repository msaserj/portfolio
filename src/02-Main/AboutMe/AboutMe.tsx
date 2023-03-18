import React from 'react';
import css from './AboutMe.module.scss';
import { FindMeBlock } from '../../00-Common/components/FindMeBlock/FindMeBlock';
import { BestSkillsBlock } from '../../00-Common/components/BestSkillsBlock/BestSkillsBlock';

export const AboutMe = () => {
  return (
    <div className={css.options}>
      <h3 className={css.header}>About Me</h3>
      <p>
        Hi I am a FrontEnd developer & I can build your website as you want. I have 1+ years of experience in Frontend
        and building a SPA with React/Redux/TypeScript in a team, 2+ years of experience with HTML, CSS, JavaScript. 5+
        years of commercial experience in IT.
      </p>
      <p></p>
      <BestSkillsBlock />
      <FindMeBlock />
    </div>
  );
};
