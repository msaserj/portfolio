import React, {ReactNode} from 'react';
import css from "./LinkButton.module.scss";


type PropsType = {
    children: ReactNode
    link: string
    pointer?: boolean
    blank?: boolean
}

export const LiBtn: React.FC<PropsType> = ({children, link, pointer, blank}) => {
    return (
        <a  style={pointer ? {cursor: "pointer"} : {cursor: "default"}} href={link} target={blank ? "_blank" : ""}>
            <li style={pointer ? {cursor: "pointer"} : {cursor: "default"}} className={css.link}>{children}</li>
        </a>
    );
};