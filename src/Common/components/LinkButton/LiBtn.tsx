import React, {ReactNode} from 'react';
import css from "./LinkButton.module.scss";

type PropsType = {
    children: ReactNode
    link: string
}

export const LiBtn: React.FC<PropsType> = ({children, link}) => {
    return (
        <a href={link}  target={"_blank"}>
            <li className={css.link}>{children}</li>
        </a>

    );
};