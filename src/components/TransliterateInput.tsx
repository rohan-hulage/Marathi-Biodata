import { ReactTransliterate } from "react-transliterate";
import type { ComponentPropsWithoutRef } from "react";
import "react-transliterate/dist/index.css";

type BaseProps = {
  value: string;
  placeholder?: string;
  onValueChange: (value: string) => void;
};

type InputProps = BaseProps & {
  as?: "input";
} & ComponentPropsWithoutRef<"input">;

type TextareaProps = BaseProps & {
  as: "textarea";
} & ComponentPropsWithoutRef<"textarea">;

type Props = InputProps | TextareaProps;

export function TransliterateInput({
  value,
  placeholder,
  onValueChange,
  as = "input",
  ...rest
}: Props) {
  return (
    <ReactTransliterate
      lang="mr"
      value={value}
      onChangeText={onValueChange}
      renderComponent={(componentProps) => {
        if (as === "textarea") {
          return (
            <textarea
              {...componentProps}
              {...rest}
              placeholder={placeholder}
              rows={(rest as TextareaProps).rows ?? 3}
            />
          );
        }
        return (
          <input
            {...componentProps}
            {...rest}
            placeholder={
              placeholder || "English टाईप करा, Marathi मध्ये रूपांतर"
            }
          />
        );
      }}
    />
  );
}

