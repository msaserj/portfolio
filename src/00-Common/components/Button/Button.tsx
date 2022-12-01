import React from 'react';
import css from "./Button.module.scss";


type PropsType = {
    buttonName?: string
}

export const Button: React.FC<PropsType> = (
    {buttonName}
) => {

    return (
        <button className={css.link}>{buttonName}</button>

    );
};