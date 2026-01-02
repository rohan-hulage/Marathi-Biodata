export type FieldInputType =
  | "transliterate"
  | "textarea"
  | "date"
  | "tel"
  | "email"
  | "text"
  | "select";

export type Biodata = {
  fullName: string;
  dob: string;
  birthTime: string;
  birthPlace: string;
  height: string;
  complexion: string;
  bloodGroup: string;
  religion: string;
  caste: string;
  education: string;
  occupation: string;
  annualIncome: string;
  fatherName: string;
  motherName: string;
  siblings: string;
  maternalUncle: string;
  relatives: string;
  address: string;
  phone: string;
  email: string;
  rashi: string;
  nakshatra: string;
  mangal: string;
  nadi: string;
  gan: string;
  devak: string;
  gotra: string;
  kuldaivat: string;
  photoData?: string | null;
};

export type FieldConfig = {
  key: keyof Biodata;
  label: string;
  inputType?: FieldInputType;
  placeholder?: string;
  rows?: number;
  options?: string[];
};

export type SectionConfig = {
  id: string;
  title: string;
  fields: FieldConfig[];
};

export const initialBiodata: Biodata = {
  fullName: "",
  dob: "",
  birthTime: "",
  birthPlace: "",
  height: "",
  complexion: "",
  bloodGroup: "",
  religion: "हिंदू",
  caste: "",
  education: "",
  occupation: "",
  annualIncome: "",
  fatherName: "",
  motherName: "",
  siblings: "",
  maternalUncle: "",
  relatives: "",
  address: "",
  phone: "",
  email: "",
  rashi: "",
  nakshatra: "",
  mangal: "",
  nadi: "",
  gan: "",
  devak: "",
  gotra: "",
  kuldaivat: "",
  photoData: null,
};

