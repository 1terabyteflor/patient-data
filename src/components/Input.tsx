import React from 'react';

interface InputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
}) => (
  <div className="grid grid-cols-6 items-baseline">
    <p className="col-span-2 lg:col-span-1 text-xs lg:text-base capitalize font-semibold">
      {placeholder}
    </p>
    <div className="flex flex-col col-span-4 lg:col-span-5 gap-y-2">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`border-b bg-transparent p-2 w-full ${error ? 'border-red-500' : ''}`}
        placeholder={placeholder}
      />
      {error ? (
        <p className="text-red-500 text-xs">{error}</p>
      ) : (
        <div className="mb-4"></div>
      )}
    </div>
  </div>
);

export default Input;
