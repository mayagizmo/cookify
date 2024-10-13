import { InputHTMLAttributes, useId } from "react";

import { FormLabel } from "./FormLabel.tsx";

type Props = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "value" | "onChange"
> &
  InputHTMLAttributes<HTMLInputElement> & {
    labelText: string;
    requiredLabel: boolean;
    type: "text" | "number";
    requiredField: boolean;
  };

export function FormInput({
  labelText,
  requiredLabel,
  name,
  value,
  type,
  onChange,
  requiredField,
  ...rest
}: Props) {
  const inputId = useId();

  return (
    <div className="flex flex-col md:items-center md:flex-row gap-2 mb-3">
      <FormLabel
        labelText={labelText}
        required={requiredLabel}
        htmlFor={inputId}
      />
      <input
        className="input input-bordered flex-grow"
        id={inputId}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        required={requiredField}
        {...rest}
      />
    </div>
  );
}
