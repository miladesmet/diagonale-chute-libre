import React, { useState, useEffect } from 'react';

interface Section {
  title: string;
  text: string;
  imagePath: string;
}

interface Props {
  sections: Section[];
}

const SectionComponent: React.FC<Props> = ({ sections }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-[#F2F6FF] text-[#0E4595]  py-5'>
      {sections.map((section, index) => (
        <div
          className={`flex items-center py-3 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          } ${
            windowWidth <= 768 ? 'flex-column-reverse' : ''
          }`}
          key={index}
        >
          <div className=' flex-column items-center px-7 pt-7 '>
            <h2 className='text-3xl font-semibold pb-4 '>{section.title}</h2>
            <p className='pb-5 text-xl'>{section.text}</p>
          </div>
          <img className={`${windowWidth <= 768 ? '' : 'w-1/2 mx-auto'}`} src={section.imagePath} alt={section.title} />
        </div>
      ))}
    </div>
  );
};

export default SectionComponent;
