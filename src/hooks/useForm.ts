import { useState } from 'react';

interface UseFormProps<T> {
  initialData: T;
  validate: (data: T) => Record<string, string>;
  onSubmit: (data: T) => void;
}

export function useForm<T>({
  initialData,
  validate,
  onSubmit,
}: UseFormProps<T>) {
  const [data, setData] = useState<T>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(data);
    } else {
      setErrors(validationErrors);
    }
  };

  return { data, errors, handleChange, handleSubmit };
}
