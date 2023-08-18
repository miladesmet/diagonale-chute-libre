import React from 'react';

interface Section {
  title: string;
  text: string;
  imagePath: string;
}

interface Props {
  sections: Section[];
}

export const SectionComponent: React.FC<Props> = ({ sections }) => {
  return (
    <div>
      {sections.sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <p>{section.text}</p>
          <img src={section.imagePath} alt={section.title} />
        </div>
      ))}
    </div>
  );
};

export default SectionComponent;
