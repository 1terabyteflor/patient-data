import React, { useState } from 'react';
import { Patient } from '../../models/Patient';

interface PatientFormProps {
  onSubmit: (patient: Patient) => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ onSubmit }) => {
  const [newPatient, setNewPatient] = useState<Patient>({
    id: '',
    name: '',
    website: '',
    address: '',
    description: '',
    avatar: '',
    createdAt: new Date().toISOString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...newPatient, id: Date.now().toString() });
    setNewPatient({
      id: '',
      name: '',
      website: '',
      address: '',
      description: '',
      avatar: '',
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={newPatient.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="website"
        value={newPatient.website}
        onChange={handleChange}
        placeholder="Website"
        required
      />
      <input
        name="description"
        value={newPatient.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="avatar"
        value={newPatient.avatar}
        onChange={handleChange}
        placeholder="Avatar URL"
        required
      />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default PatientForm;
