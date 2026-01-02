import type { Biodata, FieldConfig } from "../types/biodata";
import { TransliterateInput } from "./TransliterateInput";
import type { ChangeEvent } from "react";

type Props = {
  field: FieldConfig;
  value: string;
  onChange: (key: keyof Biodata, value: string) => void;
};

export function FormField({ field, value, onChange }: Props) {
  const { key, label, inputType = "transliterate", placeholder, rows } = field;

  const handlePlainInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(key, event.target.value);
  };

  const fieldId = `field-${key as string}`;

  if (inputType === "transliterate") {
    return (
      <label htmlFor={fieldId}>
        <span>{label}</span>
        <TransliterateInput
          id={fieldId}
          value={value}
          placeholder={placeholder}
          onValueChange={(text) => onChange(key, text)}
        />
      </label>
    );
  }

  if (inputType === "textarea") {
    return (
      <label htmlFor={fieldId}>
        <span>{label}</span>
        <TransliterateInput
          as="textarea"
          id={fieldId}
          value={value}
          rows={rows}
          placeholder={placeholder}
          onValueChange={(text) => onChange(key, text)}
        />
      </label>
    );
  }

  return (
    <label htmlFor={fieldId}>
      <span>{label}</span>
      <input
        id={fieldId}
        value={value}
        type={inputType === "text" ? "text" : inputType}
        placeholder={placeholder}
        onChange={handlePlainInput}
      />
    </label>
  );
}

