import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  type: 'primary' | 'secondary' | 'third';
  title: string;
  onUseButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ type, title, onUseButton }) => {
  const baseStyles = 'border rounded-full text-sm px-8 py-1 font-bold w-fit';
  const variantStyles = {
    primary:
      'bg-primary-dark text-white hover:bg-transparent hover:border-primary-dark hover:text-primary-dark',
    secondary:
      'bg-transparent border-primary-dark text-gray-900 hover:bg-primary-dark hover:text-white',
    third: 'border-gray-200 bg-transparent text-gray-500',
  };

  return (
    <motion.button
      type="button"
      className={`${baseStyles} ${variantStyles[type]}`}
      onClick={onUseButton}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {title}
    </motion.button>
  );
};

export default Button;
