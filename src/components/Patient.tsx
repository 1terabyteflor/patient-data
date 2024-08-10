import React, { useState, useEffect } from 'react';
import { useFetchPatients } from '../hooks/useGetPatients';
import PatientList from '../components/PatientList';
import { Patient } from '../models/Patient';

const Home: React.FC = () => {
  const { patients: fetchedPatients, loading, error } = useFetchPatients();
  const [patients, setPatients] = useState<Patient[]>([]);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <PatientList patients={patients} onEditPatient={editPatient} />
    </div>
  );
};

export default Home;
