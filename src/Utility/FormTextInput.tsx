import { ChangeEvent } from "react";

import { FormLabel } from "./FormLabel.tsx";

interface FormTextInputProps {
  labelText: string;
  requiredLabel: boolean;
  id: string;
  name: string;
  value: string;
  type: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  requiredField: boolean;
}

export function FormTextInput({
  labelText,
  requiredLabel,
  id,
  name,
  value,
  type,
  onChange,
  requiredField,
}: FormTextInputProps) {
  return (
    <div className="flex flex-col md:items-center md:flex-row gap-2 mb-3">
      <FormLabel labelText={labelText} required={requiredLabel} htmlFor={id} />
      <input
        className="input input-bordered flex-grow"
        id={id}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        required={requiredField}
      />
    </div>
  );
}
