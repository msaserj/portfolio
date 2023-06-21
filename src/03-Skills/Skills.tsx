import React from 'react';
import css from './Skills.module.scss';
import styleContainer from '../00-Common/styles/Container.module.scss';
import { Skill } from './skill/Skill';
import { Title } from '../00-Common/components/title/Title';
import { TfiLightBulb, TfiMobile } from 'react-icons/tfi';
import { FaPeopleCarry } from 'react-icons/fa';
import {SlGraduation} from "react-icons/sl";
import {CgPerformance} from "react-icons/cg";
import {SiWebstorm} from "react-icons/si";

export const Skills = () => {
  const lorem = [
    {
      title: 'Web Development',
      descr: 'As a front-end developer, I specialize in creating engaging and interactive user interfaces ' +
          'for websites and web applications. I am proficient in HTML, CSS, and JavaScript, ' +
          'and have experience with modern frameworks and libraries like ReactJS, NextJS.'
    },
    {
      title: 'Responsive Design',
      descr: 'Websites and applications I develop are optimized for various devices and screen sizes.' +
          ' I apply responsive design principles, allowing the content to adapt and provide an optimal' +
          ' user experience across desktops, tablets, and mobile devices.'
    },
    {
      title: 'User Experience ',
      descr: 'I focus on creating intuitive and user-friendly interfaces. ' +
          'I collaborate with designers and stakeholders to translate wireframes and mockups into functional and ' +
          'visually appealing user interfaces that prioritize usability and accessibility.'
    },
    {
      title: 'Collaborative Development',
      descr: 'I am experienced in working closely with back-end and front-end developers and designers ' +
          'to achieve project goals. I effectively communicate and collaborate to understand requirements,' +
          ' provide input on technical feasibility, and deliver high-quality front-end solutions.'
    },
    {
      title: 'Performance Optimization',
      descr: 'I optimize the front-end code and assets to enhance the performance and ' +
          'loading speed of websites and applications. I leverage techniques like code minification, ' +
          'image compression, caching, and lazy loading to deliver optimal performance and improve user satisfaction.'
    },
    {
      title: 'Continuous Learning',
      descr: ' I stay up-to-date with the latest front-end development trends, tools, and best practices. ' +
          'I continuously expand my skill set and explore emerging technologies to deliver innovative ' +
          'and cutting-edge solutions.'
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
            <SiWebstorm className={css.icon} />
          </Skill>
          <Skill title={lorem[1].title} description={lorem[1].descr}>
            <TfiMobile className={css.icon} />
          </Skill>
          <Skill title={lorem[2].title} description={lorem[2].descr}>
            <TfiLightBulb className={css.icon} />
          </Skill>
          <Skill title={lorem[3].title} description={lorem[3].descr}>
            <FaPeopleCarry className={css.icon} />
          </Skill>
          <Skill title={lorem[4].title} description={lorem[4].descr}>
            <CgPerformance className={css.icon} />
          </Skill>
          <Skill title={lorem[5].title} description={lorem[5].descr}>
            <SlGraduation className={css.icon} />
          </Skill>
        </div>
      </div>
    </section>
  );
};
