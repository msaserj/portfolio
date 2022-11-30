import React, {useState} from 'react';
import css from "./SkillBarr.module.scss"

type SkillBarType = {
    title: string
    percent: number
}

export const SkillBar: React.FC<SkillBarType> = ({title, percent}) => {


    const [counter, setCounter] = useState(20);

    setTimeout(()=>{
        counter <= percent && setCounter(counter+1)
    }, 10)
    return (
        <div className={css.skillBar}>
            <span className={css.header}>{title}</span>

            <div className={css.progress}>
                <div style={{width: counter+"%"}} className={css.progressBar}>
                    <div className={css.percent}>{percent} %</div>
                </div>

            </div>
        </div>
    );
};

