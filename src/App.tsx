import React from 'react';
import PatientRecords from './components/Patient';

function App() {
  return (
    <div>
      <h1 className='text-3xl lg:text-8xl font-bold uppercase tracking-tighter'>Patient Data Management</h1>
      <PatientRecords/>
    </div>
  );
}

export default App;
