import { Dispatch, FormEvent, SetStateAction, useId } from "react";

import { FormLabel } from "./FormLabel.tsx";

interface FormMultiInputProps {
  stateValue: string;
  setStateValue: Dispatch<SetStateAction<string>>;
  stateList: Array<string>;
  setStateList: Dispatch<SetStateAction<Array<string>>>;
  labelText: string;
  requiredLabel: boolean;
  name: string;
}

//TODO: Prevent adding an empty string

export function FormMultiInput({
  stateValue,
  setStateValue,
  stateList,
  setStateList,
  labelText,
  requiredLabel,
  name,
}: FormMultiInputProps) {
  const inputId = useId();
  function handleAddReference(e: FormEvent) {
    e.preventDefault();

    setStateList((prevState) => [...prevState, stateValue]);

    setStateValue("");
  }

  function handleDynamicInputChange(index: number, newValue: string) {
    setStateList(
      stateList.map((source, i) => (i === index ? newValue : source)),
    );
  }
  function handleDeleteReference(indexToDelete: number) {
    const newVal = stateList.filter((_, index) => index !== indexToDelete);

    setStateList(newVal);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
        <FormLabel
          labelText={labelText}
          required={requiredLabel}
          htmlFor={inputId}
        />
        <aside className="flex gap-2 flex-grow">
          <input
            className="input input-bordered flex-grow"
            name={name}
            value={stateValue}
            id={inputId}
            type="text"
            onChange={(e) => setStateValue(e.target.value)}
          />
          <button className="btn" onClick={handleAddReference}>
            Add
          </button>
        </aside>
      </div>

      {stateList.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {stateList.map((item, index) => (
            <div
              className="flex flex-1 min-w-[calc(100%-0.5rem)] lg:min-w-[calc(50%-0.5rem)]"
              key={index}
            >
              <input
                className="input input-bordered flex-grow"
                name={item}
                id={item}
                value={item}
                type="text"
                onChange={(e) =>
                  handleDynamicInputChange(index, e.target.value)
                }
              />
              <button
                className="p-2"
                type="button"
                onClick={() => handleDeleteReference(index)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
