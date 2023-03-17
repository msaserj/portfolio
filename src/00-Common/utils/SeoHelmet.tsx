import React, {ReactNode} from 'react';
import {Helmet} from "react-helmet";

type SeoHelmetType = {
    children: ReactNode
    title: string
    description: string
    content: string
    type: string
    imgUrl: string
}

export const SeoHelmet:React.FC<SeoHelmetType> = ({children, title, description, content, type, imgUrl}) => {
    return<>
            <Helmet>
                <title>{title}</title>
                <meta name={description} content={content}/>

                <meta property="og:url"                content="https://msaserj.ru" />
                <meta property="og:type"               content={type} />
                <meta property="og:title"              content={title} />
                <meta property="og:description"        content={description} />
                <meta property="og:image"              content={imgUrl} />
            </Helmet>
        {children}
        </>

};
