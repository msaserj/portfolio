import React from 'react';
import css from './Contacts.module.css'
import styleContainer from '../Common/styles/Container.module.css'
import {Form} from "./work/Form";

export const Contacts = () => {
    return (
        <div className={css.contactsBlock}>
            <div className={`${styleContainer.container} ${css.contactsContainer}`}>
                <h2 className={css.title}>Contacts</h2>
                <div className={css.contacts}>
                    <Form />
                </div>
            </div>
        </div>
    );
};


