import React from 'react';
import Patient from './components/Patient/PatientView';

function App() {
  return (
    <div className="bg-third-beige p-4">
      <h1 className="text-3xl lg:text-8xl font-bold uppercase text-primary-dark mb-4">
        Patient Data Management
      </h1>
      <Patient />
    </div>
  );
}

export default App;
