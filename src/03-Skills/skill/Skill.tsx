import React, { ReactNode } from 'react';
import css from './Skill.module.scss';
import { Fade } from 'react-awesome-reveal';

type SkillPropsType = {
  title: string;
  description: string;
  children: ReactNode;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <div className={css.skill}>
      <Fade triggerOnce direction={'down'}>
        <div className={css.icon}>{props.children}</div>
        <h3>{props.title}</h3>
        <p className={css.description}>{props.description}</p>
        {/*<div>*/}
        {/*  <FiArrowRight className={css.arrow} />*/}
        {/*</div>*/}
      </Fade>
    </div>
  );
};
