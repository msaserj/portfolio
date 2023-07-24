import React, { useRef, useEffect } from 'react';
import css from './SkillBarr.module.scss';
 export type SkillBarType = {
  title: string;
  percent: number;
};
 export const SkillBar: React.FC<SkillBarType> = ({ title, percent }) => {
  const ref = useRef<any>();

   useEffect(() => {
    const startAnimation = () => {
      let currentWidth = 20;
      const animate = () => {
        currentWidth += 1;
        if (currentWidth <= percent) {
          ref.current.style.setProperty('width', `${currentWidth}%`);
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };
     startAnimation();
  }, [percent]);
   return (
    <div className={css.skillBar}>
      <span className={css.header}>{title}</span>
       <div className={css.progress}>
        <div ref={ref} className={css.progressBar}>
          <div className={css.percent}>{percent} %</div>
        </div>
      </div>
    </div>
  );
};