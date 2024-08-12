import { useState, useEffect } from 'react';
import { Patient } from '../models/Patient';
import { getPatients } from '../api/patientService';

export const useFetchPatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getPatients();
        setPatients(data);
        setLoading(false);
        console.log(data);
      } catch {
        setError('Error getting patients');
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return { patients, loading, error };
};
