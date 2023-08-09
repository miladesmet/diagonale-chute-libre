import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactMentionsFooter } from './ContactMentionsFooter';

export const Footer = () => {
    return (
      <footer>
        <ContactForm />
        <ContactMentionsFooter />
      </footer>
    );
  };