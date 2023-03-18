import React, { useRef } from 'react';
import css from './SkillBarr.module.scss';

export type SkillBarType = {
  title: string;
  percent: number;
};

export const SkillBar: React.FC<SkillBarType> = ({ title, percent }) => {
  //const [counter, setCounter] = useState(20);
  const ref = useRef<any>();

  const increase = () => {
    for (let i = 20; i < percent; i++) {
      setTimeout(() => {
        ref.current.style.setProperty(`width`, `${i}%`);
      }, 1000);
    }
  };
  // setTimeout(()=>{
  //     counter <= percent && setCounter(counter+1)
  // }, 10)

  increase();

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
