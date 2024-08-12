import React from 'react';

interface ButtonProps {
  type: 'primary' | 'secondary' | 'third';
  title: string;
  onUseButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ type, title, onUseButton }) => {
  const baseStyles = 'border rounded-full px-8 py-1 font-bold w-fit';
  const variantStyles = {
    primary: 'bg-primary-dark text-white',
    secondary: 'bg-secondary-cyan text-gray-900',
    third: 'border-gray-200 bg-transparent text-gray-500',
  };
  return (
    <button
      type="button"
      className={`${baseStyles} ${variantStyles[type]}`}
      onClick={onUseButton}
    >
      {title}
    </button>
  );
};

export default Button;
