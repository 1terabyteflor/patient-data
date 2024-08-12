import React, { useState, useEffect } from 'react';
import { Patient } from '../../models/Patient';
import PatientItem from './PatientItem';
import Form from '../Form';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

interface PatientListProps {
  patients: Patient[];
  onEditPatient: (updatedPatient: Patient) => void;
}

const PatientList: React.FC<PatientListProps> = ({
  patients,
  onEditPatient,
}) => {
  const [patientsList, setPatientsList] = useState<Patient[]>(patients);
  const [newPatient, setNewPatient] = useState<Patient>({
    id: '',
    name: '',
    website: '',
    description: '',
    address: '',
    createdAt: new Date().toISOString(),
    avatar: '',
  });
  const [isAdding, setIsAdding] = useState(false);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  useEffect(() => {
    setPatientsList(patients);
  }, [patients]);

  const handleSaveNewPatient = () => {
    const patientWithId = { ...newPatient, id: uuidv4() };
    setPatientsList((prevList) => [patientWithId, ...prevList]);
    setNewPatient({
      id: '',
      name: '',
      website: '',
      description: '',
      address: '',
      createdAt: new Date().toISOString(),
      avatar: '',
    });
    setIsAdding(false);
  };

  const handleCancelNewPatient = () => {
    setIsAdding(false);
  };

  return (
    <div>
      {isAdding && (
        <Form
          patientData={newPatient}
          setPatientData={(data: Partial<Patient>) =>
            setNewPatient((prev) => ({ ...prev, ...data }))
          }
          onSubmit={handleSaveNewPatient}
          onCancel={handleCancelNewPatient}
        />
      )}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 gap-1"
      >
        {patientsList.map((patient) => (
          <PatientItem
            key={patient.id}
            patient={patient}
            onSave={onEditPatient}
            activeItemId={activeItemId}
            onSetActiveItem={setActiveItemId}
          />
        ))}
      </motion.ul>
    </div>
  );
};

export default PatientList;
