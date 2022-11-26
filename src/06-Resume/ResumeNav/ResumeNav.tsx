import React, {ReactNode} from 'react';
import css from './ResumeNav.module.scss'




export const ResumeNav = () => {
    return (
       <>
           <ul className={css.navBlock}>
               <li className={css.navItem}>Educational</li>
               <li className={css.navItem}>Professional Skills</li>
               <li className={css.navItem}>Experience</li>
               <li className={css.navItem}>Interview</li>
           </ul>
       </>
    );
};
