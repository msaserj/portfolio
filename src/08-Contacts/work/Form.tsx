import React from 'react';
import css from './Form.module.scss'


export const Form = () => {
    return (
            <div className={css.form} onSubmit={e => e}>
                <input className={css.input} type="text" placeholder={'Your name'}/>
                <input className={css.input} type="email" placeholder={'email'}/>
                <input className={css.input} type="text" placeholder={'subject'}/>
                <textarea className={css.textArea} placeholder={'your message'} onChange={e => e}>Your message</textarea>
                <button className={css.button}>Submit</button>
            </div>
    );
};
