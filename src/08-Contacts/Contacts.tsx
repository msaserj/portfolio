import React from 'react';
import css from './Contacts.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Form} from "./work/Form";
import {Title} from "../00-Common/components/title/Title";
import {ContactsBlock} from "./ContactsBlock/ContactsBlock";

export const Contacts = () => {
    return (
        <div id="contacts" className={css.contactsBlock}>
            <div className={`${styleContainer.container} ${css.contactsContainer}`}>
                <Title description={"contacts"} title={"Contact With Me"}/>
                <div className={css.contacts}>
                    <ContactsBlock/>
                    <Form />
                </div>
            </div>
        </div>
    );
};


