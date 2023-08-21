import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  faqData: FAQItem[]
}

const FAQComponent: React.FC<FAQProps> = ({ faqData }) => {
  //Mémoire de la réponse affichée
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  // Systeme d'affichage des réponses
  const toggleAnswer = (index: number) => setExpandedIndex(expandedIndex === index ? null : index)

  return (
    <div className="flex-col text-[#0E4595] items-center justify-center justify-items-center bg-[#F2F6FF]">
      {faqData.map((item, index) => (
        <div className="flex flex-col items-center py-5 border-b-2 border-[C7D8F2]" key={index}>
          <div className="question text-2xl hover:font-bold " onClick={() => toggleAnswer(index)}>
            {item.question}
          </div>
          {expandedIndex === index && <div className=" text-xl text-center px-10">{item.answer}</div>}
        </div>
      ))}
    </div>
  )
}

export default FAQComponent
