import React from 'react';
import { motion } from 'framer-motion';
import Input from './Input';
import Button from './Button';
import { FormProps } from '../models/Patient';
import { validatePatientData } from '../utils/validation';

const Form: React.FC<FormProps> = ({
  patientData,
  setPatientData,
  onSubmit,
  onCancel,
}) => {
  const errors = validatePatientData(patientData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  return (
    <motion.form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-col w-full my-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Input
          name="name"
          value={patientData.name}
          onChange={handleChange}
          placeholder="Name"
          error={errors.name}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Input
          name="website"
          value={patientData.website}
          onChange={handleChange}
          placeholder="Website"
          error={errors.website}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Input
          name="description"
          value={patientData.description}
          onChange={handleChange}
          placeholder="Description"
          error={errors.description}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Input
          name="createdAt"
          value={patientData.createdAt}
          onChange={handleChange}
          placeholder="Created At"
          error={errors.createdAt}
        />
      </motion.div>
      {patientData.address && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Input
            name="address"
            value={patientData.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </motion.div>
      )}
      <div className="flex gap-x-2">
        {onCancel && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Button type="third" title="Cancel" onUseButton={onCancel} />
          </motion.div>
        )}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Button type="primary" title="Save" onUseButton={onSubmit} />
        </motion.div>
      </div>
    </motion.form>
  );
};

export default Form;
