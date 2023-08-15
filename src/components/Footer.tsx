import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactMentionsFooter } from './ContactMentionsFooter';
import { WeatherFooter } from './WeatherFooter'

export const Footer = () => {
    return (
      <footer>
          <WeatherFooter/>
        <ContactForm />
        <ContactMentionsFooter />
      </footer>
    );
  };