import React from 'react';
import { Patient } from '../../models/Patient';
import Avatar from '../Avatar';
import { formatDate } from '../../utils/formatDate';
import Button from '../Button';

const PatientDetails: React.FC<{ patient: Patient; onEdit: () => void }> = ({
  patient,
  onEdit,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        <Avatar
          src={patient.avatar}
          alt={`${patient.name}'s avatar`}
          size={111}
          roundedImg={false}
        />
        <div className="flex flex-col px-4 h-[111px] w-full">
          <p className="text-xl capitalize font-semibold">{patient.name}</p>
          <p className="text-xs flex gap-x-1">
            <strong>Website: </strong>
            <p className="underline cursor-pointer">{patient.website}</p>
          </p>
          <p className="text-xs">
            <strong>Created At: </strong>
            {formatDate(patient.createdAt)}
          </p>
        </div>
      </div>
      <p className="text-sm">{patient.description}</p>
      <Button type="secondary" title="Edit Information" onUseButton={onEdit} />
    </div>
  );
};

export default PatientDetails;
