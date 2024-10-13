interface labelProps {
  labelText: string;
  required: boolean;
  htmlFor: string;
}

export function FormLabel({ labelText, required, htmlFor }: labelProps) {
  return (
    <label htmlFor={htmlFor} className="w-32">
      {required && <span className="text-red-600">*</span>} {labelText}
    </label>
  );
}
