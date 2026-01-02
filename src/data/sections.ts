import type { SectionConfig } from "../types/biodata";

export const sections: SectionConfig[] = [
  {
    id: "personal",
    title: "वैयक्तिक माहिती",
    fields: [
      {
        key: "fullName",
        label: "पूर्ण नाव",
        placeholder: "उदा. संदीप कुलकर्णी",
      },
      { key: "dob", label: "जन्मतारीख", inputType: "date" },
      { key: "birthTime", label: "जन्माची वेळ" },
      { key: "birthPlace", label: "जन्मस्थान" },
      {
        key: "height",
        label: "उंची",
        placeholder: "उदा. 5'8\"",
      },
      { key: "complexion", label: "रंग" },
      { key: "bloodGroup", label: "रक्तगट" },
      { key: "religion", label: "धर्म" },
      { key: "caste", label: "जात / उपजात" },
      { key: "kuldaivat", label: "कुलदैवत" },
    ],
  },
  {
    id: "horoscope",
    title: "कुंडली माहिती",
    fields: [
      { key: "rashi", label: "राशि" },
      { key: "nakshatra", label: "नक्षत्र" },
      { key: "devak", label: "देवक" },
      { key: "gotra", label: "गोत्र" },
      { key: "mangal", label: "मंगळ (हो/नाही)" },
      { key: "nadi", label: "नाडी" },
      { key: "gan", label: "गण" },
    ],
  },
  {
    id: "education",
    title: "शैक्षणिक व व्यावसायिक माहिती",
    fields: [
      { key: "education", label: "शिक्षण", inputType: "textarea", rows: 3 },
      {
        key: "occupation",
        label: "व्यवसाय / संस्था",
        inputType: "textarea",
        rows: 3,
      },
      { key: "annualIncome", label: "वार्षिक उत्पन्न", inputType: "text" },
    ],
  },
  {
    id: "family",
    title: "कौटुंबिक माहिती",
    fields: [
      {
        key: "fatherName",
        label: "वडिलांचे नाव व व्यवसाय",
        inputType: "textarea",
        rows: 2,
      },
      {
        key: "motherName",
        label: "आईचे नाव व व्यवसाय",
        inputType: "textarea",
        rows: 2,
      },
      {
        key: "siblings",
        label: "भावंडांची माहिती",
        inputType: "textarea",
        rows: 2,
      },
      {
        key: "maternalUncle",
        label: "मामाचे नाव",
        inputType: "text",
      },
      {
        key: "relatives",
        label: "नातेवाईकांची आडनावे",
        inputType: "textarea",
        rows: 2,
      },
    ],
  },
  {
    id: "contact",
    title: "संपर्क व पत्ता",
    fields: [
      { key: "address", label: "सध्याचा पत्ता", inputType: "textarea", rows: 3 },
      { key: "phone", label: "फोन नंबर", inputType: "tel" },
      { key: "email", label: "ईमेल", inputType: "email" },
    ],
  },
];

