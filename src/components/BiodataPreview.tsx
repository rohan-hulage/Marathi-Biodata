import type { Biodata, SectionConfig } from "../types/biodata";

type Props = {
  sections: SectionConfig[];
  data: Biodata;
};

const formatDate = (dateString?: string) => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  return year && month && day ? `${day}/${month}/${year}` : dateString;
};

export function BiodataPreview({ data }: Props) {
  const personalRows = [
    { label: "नाव", value: data.fullName },
    { label: "जन्म तारीख", value: formatDate(data.dob) },
    { label: "जन्माची वेळ", value: data.birthTime },
    { label: "जन्म ठिकाण", value: data.birthPlace },
    {
      label: "धर्म / जात",
      value: [data.religion, data.caste].filter(Boolean).join(" - "),
    },
    { label: "कुलदैवत", value: data.kuldaivat },
    { label: "उंची", value: data.height },
    { label: "रंग", value: data.complexion },
    { label: "रक्तगट", value: data.bloodGroup },
  ].filter((row) => row.value?.trim());

  const horoscopeRows = [
    { label: "राशी", value: data.rashi },
    { label: "नक्षत्र", value: data.nakshatra },
    { label: "देव", value: data.devak },
    { label: "गोत्र", value: data.gotra },
    { label: "मंगळ", value: data.mangal },
    { label: "नाडी", value: data.nadi },
    { label: "गण", value: data.gan },
  ].filter((row) => row.value?.trim());

  const careerRows = [
    { label: "शिक्षण", value: data.education },
    { label: "नोकरी / व्यवसाय", value: data.occupation },
    { label: "वार्षिक उत्पन्न", value: data.annualIncome },
  ].filter((row) => row.value?.trim());

  const familyRows = [
    { label: "वडिलांचे नाव", value: data.fatherName },
    { label: "आईचे नाव", value: data.motherName },
    { label: "भावंडे", value: data.siblings },
    { label: "मामाचे नाव", value: data.maternalUncle },
    { label: "नातेवाईक", value: data.relatives },
  ].filter((row) => row.value?.trim());

  const contactRows = [
    { label: "पत्ता", value: data.address },
    { label: "फोन", value: data.phone },
    { label: "ईमेल", value: data.email },
  ].filter((row) => row.value?.trim());

  const renderRows = (rows: { label: string; value?: string }[]) =>
    rows.map((row) => (
      <div key={row.label} className="preview-data-row">
        <div className="preview-label">{row.label}</div>
        <div className="preview-colon">:</div>
        <div className="preview-value">{row.value}</div>
      </div>
    ));

  return (
    <div className="preview-container">
      <div className="preview-outer-border">
        <div className="preview-inner-border">
          <div className="preview-crest">ॐ</div>
          <div className="preview-mantra">॥ श्री गणेशाय नमः ॥</div>
          <div className="preview-subtitle">वैयक्तिक माहिती</div>
          <div className="preview-top-row">
            <div className="preview-details-column">
              {renderRows(personalRows)}
            </div>
            <div className="preview-photo-panel">
              {data.photoData ? (
                <img src={data.photoData} alt="Photo" />
              ) : (
                <div className="preview-photo-placeholder">फोटो</div>
              )}
            </div>
          </div>

          {horoscopeRows.length > 0 && (
            <>
              <div className="preview-section-title">कुंडली माहिती</div>
              {renderRows(horoscopeRows)}
            </>
          )}

          {careerRows.length > 0 && (
            <>
              <div className="preview-section-title">
                शैक्षणिक व व्यावसायिक माहिती
              </div>
              {renderRows(careerRows)}
            </>
          )}

          {familyRows.length > 0 && (
            <>
              <div className="preview-section-title">कौटुंबिक माहिती</div>
              {renderRows(familyRows)}
            </>
          )}

          {contactRows.length > 0 && (
            <>
              <div className="preview-section-title">संपर्क माहिती</div>
              {renderRows(contactRows)}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

