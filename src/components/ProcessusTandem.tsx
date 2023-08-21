import React from 'react';
import SectionComponent from './SectionsComponent';
import ProcessusTandemJson from '../assets/presentation_tandem.json';


const ProcessusTandem = () => {
  return (
    <div className="bg-[#F2F6FF] text-[#0E4595] py-10">
      <h1 className='text-center text-5xl font-semibold'>Présentation tandem </h1>
      <SectionComponent sections={ProcessusTandemJson} />
    </div>
  );
};

export default ProcessusTandem;
