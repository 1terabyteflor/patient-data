import React, { useState, useCallback } from 'react';
import { Patient } from '../../models/Patient';
import { FaChevronRight, FaChevronUp } from 'react-icons/fa';
import Form from '../Form';
import PatientHeader from './PatientHeader';
import PatientDetails from './PatientDetails';

interface PatientItemProps {
  patient: Patient;
  onSave: (updatedPatient: Patient) => void;
  activeItemId: string | null;
  onSetActiveItem: (id: string | null) => void;
}

const PatientItem: React.FC<PatientItemProps> = ({
  patient,
  onSave,
  activeItemId,
  onSetActiveItem,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [patientData, setPatientData] = useState<Partial<Patient>>({
    name: patient.name,
    website: patient.website,
    description: patient.description,
    createdAt: patient.createdAt,
    address: patient.address,
    avatar: patient.avatar,
  });

  const isExpanded = activeItemId === patient.id;

  const handleToggle = useCallback(() => {
    if (isExpanded) {
      onSetActiveItem(null);
    } else {
      onSetActiveItem(patient.id);
    }
  }, [isExpanded, onSetActiveItem, patient.id]);

  const handleEdit = useCallback(() => {
    if (isEditing) {
      const updatedPatient: Patient = {
        ...patient,
        ...patientData,
      };
      onSave(updatedPatient);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [isEditing, patient, patientData, onSave]);

  const handleCancel = useCallback(() => {
    setIsEditing(false);
  }, []);

  return (
    <li className="w-full transition-transform duration-500 ease-in-out">
      <button
        onClick={handleToggle}
        className="flex w-full px-4 py-2 my-2 border-y rounded-3xl border-gray-300 hover:cursor-pointer hover:bg-secondary-cyan transform transition-transform duration-200 focus:outline-none hover:shadow-lg hover:scale-[1.005]"
      >
        <div className="flex justify-between gap-x-4 items-center w-full">
          <PatientHeader patient={patient} />
          {isExpanded ? (
            <FaChevronUp size={10} />
          ) : (
            <FaChevronRight size={10} />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4">
          {isEditing ? (
            <Form
              patientData={patientData as Patient}
              setPatientData={setPatientData}
              onSubmit={handleEdit}
              onCancel={handleCancel}
            />
          ) : (
            <PatientDetails patient={patient} onEdit={handleEdit} />
          )}
        </div>
      </div>
    </li>
  );
};

export default PatientItem;
