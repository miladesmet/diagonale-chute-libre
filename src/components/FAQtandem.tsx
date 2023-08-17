import React from 'react';

import FAQComponent from './FAQcomponent';

import faq_tandem from '../assets/faq_tandem.json'

export const FAQtandem = () => {
  return (
    <div className='py-8 bg-[#F2F6FF] '>
        <h1 className='py-5 text-5xl text-center font-semibold px-10 text-[#0E4595] '>FAQ Tandem</h1>
        <FAQComponent faqData={ faq_tandem} />
    </div>
  );
};