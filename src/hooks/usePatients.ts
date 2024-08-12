import { useState, useEffect, useCallback } from 'react';
import { useFetchPatients } from '../hooks/useFetchPatients';
import { Patient } from '../models/Patient';
import { v4 as uuidv4 } from 'uuid';

const usePatients = () => {
  const { patients: fetchedPatients, loading, error } = useFetchPatients();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [newPatient, setNewPatient] = useState<Partial<Patient>>({
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

  const editPatient = useCallback((updatedPatient: Patient) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient,
      ),
    );
  }, []);

  const handleSaveNewPatient = useCallback(() => {
    const patientWithId = { ...newPatient, id: uuidv4() } as Patient;
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
  }, [newPatient]);

  const handleCancelNewPatient = useCallback(() => {
    setIsAdding(false);
  }, []);

  return {
    patients,
    newPatient,
    isAdding,
    loading,
    error,
    setNewPatient,
    setIsAdding,
    handleSaveNewPatient,
    handleCancelNewPatient,
    editPatient,
  };
};

export default usePatients;
