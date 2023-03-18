import React from 'react';
import css from './Skills.module.scss';
import styleContainer from '../00-Common/styles/Container.module.scss';
import { Skill } from './skill/Skill';
import { Title } from '../00-Common/components/title/Title';
import { TfiAlignJustify, TfiLightBulb, TfiMobile } from 'react-icons/tfi';
import { SiJest, SiLinux } from 'react-icons/si';
import { FaPeopleCarry } from 'react-icons/fa';

export const Skills = () => {
  const lorem = [
    {
      title: 'Responsive',
      descr: 'My layouts will work on any device, big or small.'
    },
    {
      title: 'Business Logic App',
      descr: 'Business logic important aspect of development - it affects the speed of the application.'
    },
    {
      title: 'Intuitive',
      descr: 'Strong preference for easy to use, intuitive UX/UI.'
    },
    {
      title: 'Team Development',
      descr: 'I have experience of working in a team and developing complex applications.'
    },
    {
      title: 'Unit Tests',
      descr: 'Your app will be more stable and you will know whats broken in app'
    },
    {
      title: 'Linux',
      descr: 'I use Linux systems for development, delivery and deployment of applications.'
    }
  ];
  return (
    <section id={'skills'} className={css.skillsBlock}>
      <div className={`${styleContainer.container} ${css.skillsContainer}`}>
        <div>
          <Title description={'Features'} title={'WHAT I DO'} />
        </div>
        <div className={css.skills}>
          <Skill title={lorem[0].title} description={lorem[0].descr}>
            <TfiMobile className={css.icon} />
          </Skill>
          <Skill title={lorem[1].title} description={lorem[1].descr}>
            <TfiAlignJustify className={css.icon} />
          </Skill>
          <Skill title={lorem[2].title} description={lorem[2].descr}>
            <TfiLightBulb className={css.icon} />
          </Skill>
          <Skill title={lorem[3].title} description={lorem[3].descr}>
            <FaPeopleCarry className={css.icon} />
          </Skill>
          <Skill title={lorem[4].title} description={lorem[4].descr}>
            <SiJest className={css.icon} />
          </Skill>
          <Skill title={lorem[5].title} description={lorem[5].descr}>
            <SiLinux className={css.icon} />
          </Skill>
        </div>
      </div>
    </section>
  );
};
