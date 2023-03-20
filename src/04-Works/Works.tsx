import React from 'react';
import css from './Works.module.scss';
import styleContainer from '../00-Common/styles/Container.module.scss';
import { Work } from './work/Work';
import { Title } from '../00-Common/components/title/Title';
import jsonState from './00_WorksData/WorksData';

export type WorkDataType = typeof jsonState.work1;

export const Works = () => {
  const { work1, work2, work3, work4, work5, work6 } = jsonState;

  return (
    <section id={'works'} className={css.worksBlock}>
      <div className={`${styleContainer.container} ${css.worksContainer}`}>
        <div>
          <Title description={'Visit my portfolio'} title={'My works'} />
        </div>
        <div className={css.works}>
          <Work image={work1.workImg} title={work1.headerBlock.header} linkType={'gallery'} data={work1} />
          <Work image={work2.workImg} title={work2.headerBlock.header} linkType={'gallery'} data={work2} />
          <Work image={work3.workImg} title={work3.headerBlock.header} linkType={'gallery'} data={work3} />
          <Work image={work4.workImg} title={work4.headerBlock.header} linkType={'gallery'} data={work4} />
          <Work image={work5.workImg} title={work5.headerBlock.header} linkType={'gallery'} data={work5} />
          <Work image={work6.workImg} title={work6.headerBlock.header} linkType={'External Link'} data={work6} />
        </div>
      </div>
    </section>
  );
};
