import React from 'react';
import { useFetchPatients } from '../hooks/useGetPatients';
import PatientList from '../components/PatientList';

const Home: React.FC = () => {
  const { patients, loading, error } = useFetchPatients();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <PatientList patients={patients} />
    </div>
  );
};

export default Home;
