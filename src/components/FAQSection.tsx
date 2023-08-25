import React from 'react'
import FAQComponent from './FAQcomponent'

type FaqData = {
  question: string
  answer: string
}

interface Props {
  sectionTitle: string
  faqData: FaqData[]
}

const FAQSection: React.FC<Props> = ({ sectionTitle, faqData }) => (
  <div className="py-8 bg-[#F2F6FF]">
    <h1 className="py-5 text-5xl text-center font-semibold px-10 text-[#0E4595] ">{sectionTitle}</h1>
    <FAQComponent faqData={faqData} />
  </div>
)

export default FAQSection
