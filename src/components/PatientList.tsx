import React from 'react';
import { Patient } from '../models/Patient';
import PatientItem from './PatientItem';

interface PatientListProps {
  patients: Patient[];
  onEditPatient: (updatedPatient: Patient) => void;
}

const PatientList: React.FC<PatientListProps> = ({
  patients,
  onEditPatient,
}) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {patients.map((patient) => (
          <PatientItem
            key={patient.id}
            patient={patient}
            onSave={onEditPatient}
          />
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
