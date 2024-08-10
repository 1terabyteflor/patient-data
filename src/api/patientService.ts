import client from './client';
import { Patient } from '../models/Patient';

export const getPatients = async (): Promise<Patient[]> => {
  const response = await client.get<Patient[]>('/users');
  return response.data;
};
