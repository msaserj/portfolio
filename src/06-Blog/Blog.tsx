import React from 'react';
import css from './Blog.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Title} from "../00-Common/components/title/Title";

export const Blog = () => {

    return (
        <section id={"blog"} className={css.remoteBlock}>
            <div className={`${styleContainer.container} ${css.remoteContainer}`}>
                <Title description={"About my life"} title={"My Blog"}/>
                <h3>There will be something here soon.</h3>
            </div>
        </section>
    );
};


