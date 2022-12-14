import React from 'react';
import { useForm } from 'react-hook-form';

interface TextInputProps {
  name: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const { name, placeholder } = props;

  const { register } = useForm();

  return (
    <input
      className="block border outline-0 w-full px-4 py-3 border-grey-300 rounded-md focus:border-sky-500"
      placeholder={placeholder}
      {...register(name)}
    />
  );
};

export default TextInput;
