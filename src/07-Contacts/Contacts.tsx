import React from 'react';
import css from './Contacts.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Form} from "./Form/Form";
import {Title} from "../00-Common/components/title/Title";
import {ContactsBlock} from "./ContactsBlock/ContactsBlock";
import {Slide} from "react-awesome-reveal";

export const Contacts = () => {
    return (
        <section id="contacts" className={css.contactsBlock}>
            <div className={`${styleContainer.container} ${css.contactsContainer}`}>
                <div>
                    <Title description={"contacts"} title={"My Contacts"}/>
                </div>
                <Slide triggerOnce direction={"up"}>
                    <div className={css.contacts}>
                        <ContactsBlock/>
                        <Form/>
                    </div>
                </Slide>
            </div>
        </section>
    );
};


