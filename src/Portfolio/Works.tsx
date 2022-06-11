import React from 'react';
import css from './Works.module.css'
import styleContainer from '../Common/styles/Container.module.css'
import {Work} from "./work/Work";

export const Works = () => {
    const lorem = 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua.'

    return (
        <div className={css.worksBlock}>
            <div className={`${styleContainer.container} ${css.worksContainer}`}>
                <h2 className={css.title}>My works</h2>
                <div className={css.works}>
                    <Work title={"Work 1"} descryption={lorem}/>
                    <Work title={"Work 2"} descryption={lorem} />
                    <Work title={"Work 3"} descryption={lorem} />
                    <Work title={"Work 4"} descryption={lorem} />
                </div>
            </div>
        </div>
    );
};


