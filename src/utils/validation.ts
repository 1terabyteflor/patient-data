interface PatientData {
  name: string;
  website: string;
  description: string;
  createdAt: string;
}

export const validatePatientData = (
  data: PatientData,
): Record<string, string> => {
  const errors: Record<string, string> = {};
  if (!data.name) errors.name = 'Name is required';
  if (!data.website) errors.website = 'Website is required';
  if (!data.createdAt) errors.createdAt = 'Created At is required';
  return errors;
};
