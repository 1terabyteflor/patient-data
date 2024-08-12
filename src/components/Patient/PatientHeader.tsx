import React from 'react';
import { Patient } from '../../models/Patient';
import Avatar from '../Avatar';

interface PatientHeaderProps {
  patient: Patient;
}

const PatientHeader: React.FC<PatientHeaderProps> = ({ patient }) => {
  return (
    <div className="flex lg:grid lg:grid-cols-3 lg:items-center lg:gap-x-4 w-full">
      <div className="flex items-center gap-x-2 lg:justify-start">
        <Avatar
          src={patient.avatar}
          alt={patient.name}
          size={32}
          roundedImg={true}
        />
        <p className="text-base capitalize font-semibold">{patient.name}</p>
      </div>
      <div className="hidden lg:flex lg:justify-center lg:items-center lg:ml-6 text-xs text-center">
        {new Date(patient.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default PatientHeader;
