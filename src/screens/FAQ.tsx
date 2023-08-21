import React from 'react'
import FAQSection from '../components/FAQSection'

import tandemData from '../data/faq_tandem.json'
import pacData from '../data/faq_pac.json'

export const FAQ = () => (
  <main>
    <FAQSection sectionTitle={'FAQ Tandem'} faqData={tandemData} />
    <FAQSection sectionTitle={'FAQ PAC'} faqData={pacData} />
  </main>
)
