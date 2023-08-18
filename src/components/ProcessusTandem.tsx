import React from 'react';
import SectionComponent from './SectionsComponent';
import ProcessusTandem from '../assets/presentation_tandem.json';


const App: React.FC = () => {
  return (
    <div className="App">
      <SectionComponent sections={ProcessusTandem} />
    </div>
  );
};

export default App;
