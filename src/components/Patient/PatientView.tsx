import React, { useState, useEffect } from 'react';
import { useFetchPatients } from '../../hooks/useFetchPatients';
import PatientList from './PatientList';
import { Patient } from '../../models/Patient';
import Loading from '../Loading';
import Button from '../Button';
import Form from '../Form';
import { v4 as uuidv4 } from 'uuid';

const PatientView: React.FC = () => {
  const { patients: fetchedPatients, loading, error } = useFetchPatients();
  const [patients, setPatients] = useState<Patient[]>([]);
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

  useEffect(() => {
    if (fetchedPatients.length > 0) {
      setPatients(fetchedPatients);
    }
  }, [fetchedPatients]);

  const editPatient = (updatedPatient: Patient) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient,
      ),
    );
  };

  const handleSaveNewPatient = () => {
    const patientWithId = { ...newPatient, id: uuidv4() };
    setPatients((prevList) => [patientWithId, ...prevList]);
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

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <div className="mb-4">
        <Button
          type="primary"
          title="+ Add new patient"
          onUseButton={() => setIsAdding(true)}
        />
      </div>
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
      <div className="flex flex-col mb-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 items-center border rounded-tl-xl rounded-tr-xl px-4 py-1">
          <span className="font-semibold text-left">Patient Name</span>
          <span className="font-semibold hidden lg:block text-center">
            Date Created
          </span>
        </div>
        <PatientList patients={patients} onEditPatient={editPatient} />
      </div>
    </div>
  );
};

export default PatientView;
