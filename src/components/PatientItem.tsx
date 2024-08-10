import React, { useState } from 'react';
import { Patient } from '../models/Patient';

interface PatientItemProps {
  patient: Patient;
}

const PatientItem: React.FC<PatientItemProps> = ({ patient }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className='flex flex-col items-start'>
      <img 
        src={patient.avatar} 
        alt='Avatar' 
        width={111} 
        height={111} 
        className='rounded-full mb-2'
      />
      <strong className='text-xl'>Name:</strong> {patient.name} <br />
      {isExpanded && (
        <>
          <strong>Website:</strong> {patient.website} <br />
          <strong>Description:</strong> {patient.description} <br />
          <strong>Created At:</strong> {patient.createdAt} <br />
        </>
      )}
      <button 
        onClick={toggleDetails} 
        className='mt-2 text-blue-500 hover:underline'
      >
        {isExpanded ? 'Collapse Details' : 'View Details'}
      </button>
    </li>
  );
};

export default PatientItem;
