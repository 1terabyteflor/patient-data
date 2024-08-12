export interface Patient {
  id: string;
  name: string;
  website: string;
  description: string;
  createdAt: string;
  address?: string;
  avatar?: string;
}

export interface FormProps {
  patientData: Patient;
  setPatientData: (data: Partial<Patient>) => void;
  onSubmit: () => void;
  onCancel?: () => void;
}
