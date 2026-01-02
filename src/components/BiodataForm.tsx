import type { Biodata, SectionConfig } from "../types/biodata";
import { FormField } from "./FormField";

type Props = {
  sections: SectionConfig[];
  data: Biodata;
  onChange: (key: keyof Biodata, value: string) => void;
};

export function BiodataForm({ sections, data, onChange }: Props) {
  return (
    <>
      {sections.map((section) => (
        <div key={section.id} className="form-section">
          <h2>{section.title}</h2>
          <div className="grid">
            {section.fields.map((field) => (
              <FormField
                key={field.key as string}
                field={field}
                value={data[field.key] ?? ""}
                onChange={onChange}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

