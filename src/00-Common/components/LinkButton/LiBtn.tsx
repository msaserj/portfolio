import React, {ReactNode} from 'react';
import css from "./LinkButton.module.scss";


type PropsType = {
    children: ReactNode
    link?: string
    pointer?: boolean
    blank?: boolean
    title?: string
}

export const LiBtn: React.FC<PropsType> = (
    {children, link, pointer, blank, title}
) => {

    return (
        <a className={css.a} title={title} style={pointer ? {cursor: "pointer"} : {cursor: "default"}} href={link} target={blank ? "_blank" : ""}>
            <li style={pointer ? {cursor: "pointer"} : {cursor: "default"}} className={css.link}>{children}</li>
        </a>
    );
};