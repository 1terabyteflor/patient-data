import React from 'react';
import { Patient } from '../models/Patient';
import PatientItem from './PatientItem';

interface PatientListProps {
  patients: Patient[];
}

const PatientList: React.FC<PatientListProps> = ({ patients }) => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
      {patients.map(patient => (
        <PatientItem key={patient.id} patient={patient} />
      ))}
    </ul>
  );
};

export default PatientList;
