import React from 'react';
import css from './Form.module.scss'
import {Button} from "../../00-Common/components/Button/Button";


export const Form = () => {
    return (
            <div className={css.form} onSubmit={e => e}>
                <input className={css.input} type="text" placeholder={'Your name'}/>
                <input className={css.input} type="email" placeholder={'email'}/>
                <input className={css.input} type="text" placeholder={'subject'}/>
                <textarea className={css.textArea} placeholder={'your message'} onChange={e => e}>Your message</textarea>
                <Button buttonName={"Send message"}/>
            </div>
    );
};
