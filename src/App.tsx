import React from 'react';
import PatientRecords from './components/Patient';

function App() {
  return (
    <div className="bg-[#F9F9F9] px-4">
      <h1 className="text-3xl lg:text-8xl font-bold uppercase tracking-tighter text-gray-700">
        Patient Data Management
      </h1>
      <PatientRecords />
    </div>
  );
}

export default App;
