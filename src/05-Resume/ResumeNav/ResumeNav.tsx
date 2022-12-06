import React from 'react';
import css from './ResumeNav.module.scss'
import {NavLink} from "react-router-dom";

export const ResumeNav = () => {
    let activeStyle = {
        color: "#FF014FFF"
    };
    const setActive = ({isActive}: { isActive: boolean }) => isActive ? activeStyle : undefined;
    return (
        <>
            <ul className={css.navBlock}>
                <li className={css.navItem}>
                    <NavLink style={setActive} className={css.link} to="/">Education</NavLink></li>
                <li className={css.navItem}>
                    <NavLink style={setActive} className={css.link} to="/profskills">Skills</NavLink></li>
                <li className={css.navItem}>
                    <NavLink style={setActive} className={css.link} to="/experience">Experience</NavLink></li>
                <li className={css.navItem}>
                    <NavLink style={setActive} className={css.link} to="/interview">Other Experience</NavLink></li>
            </ul>
        </>
    );
};
