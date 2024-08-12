import React from 'react';
import Patient from './components/Patient/PatientView';

function App() {
  return (
    <div className="bg-third-beige p-4">
      <h1 className="text-xl lg:text-2xl font-bold uppercase text-primary-dark ml-4">
        Patient Data Management
      </h1>
      <Patient />
    </div>
  );
}

export default App;
