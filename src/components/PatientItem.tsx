import React, { useState } from 'react';
import { Patient } from '../models/Patient';

interface PatientItemProps {
  patient: Patient;
  onSave: (updatedPatient: Patient) => void;
}

const PatientItem: React.FC<PatientItemProps> = ({ patient, onSave }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const [editName, setEditName] = useState(patient.name);
  const [editWebsite, setEditWebsite] = useState(patient.website);
  const [editDescription, setEditDescription] = useState(patient.description);
  const [editCreatedAt, setEditCreatedAt] = useState(patient.createdAt);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEdit = () => {
    if (isEditing) {
      const updatedPatient: Patient = {
        ...patient,
        name: editName,
        website: editWebsite,
        description: editDescription,
        createdAt: editCreatedAt,
      };
      
      onSave(updatedPatient);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <li className="flex flex-col justify-center items-center p-4 rounded-xl bg-[#EFEFEF] border-white">
      <img src={patient.avatar} alt='Avatar' width={111} height={111} className='rounded-full mb-4' />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="border p-2 rounded-md mb-2"
            placeholder="Name"
          />
          <input
            type="text"
            value={editWebsite}
            onChange={(e) => setEditWebsite(e.target.value)}
            className="border p-2 rounded-md mb-2"
            placeholder="Website"
          />
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="border p-2 rounded-md mb-2"
            placeholder="Description"
          />
          <input
            type="text"
            value={editCreatedAt}
            onChange={(e) => setEditCreatedAt(e.target.value)}
            className="border p-2 rounded-md mb-2"
            placeholder="Created At"
          />
        </>
      ) : (
        <>
          <p className='lg:text-2xl self-center capitalize font-semibold'>{patient.name}</p>
          <p>{patient.website}</p>
          {isExpanded && (
            <>
              <p>{patient.description}</p>
              <p>{patient.createdAt}</p>
            </>
          )}
          <button 
            onClick={handleToggle} 
            className="mt-2 p-2 bg-blue-500 text-white rounded-xl">
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </>
      )}
      <button
        onClick={handleEdit}
        className="mt-2 p-2 bg-green-500 text-white rounded-xl self-end"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

export default PatientItem;
