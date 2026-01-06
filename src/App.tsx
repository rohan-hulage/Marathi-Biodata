import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect } from "react";
import "./App.css";
import { sections } from "./data/sections";
import { BiodataForm } from "./components/BiodataForm";
import { BiodataPreview } from "./components/BiodataPreview";
import { PhotoUploader } from "./components/PhotoUploader";
import { generatePdf } from "./utils/pdfGenerator";
import { initialBiodata } from "./types/biodata";
import type { Biodata } from "./types/biodata";


function App() {
  const [data, setData] = useState<Biodata>(() => {
    const saved = localStorage.getItem("biodata-form");
    return saved ? JSON.parse(saved) : initialBiodata;
  });

  useEffect(() => {
    localStorage.setItem("biodata-form", JSON.stringify(data));
  }, [data]);

  const handleChange = (key: keyof Biodata, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handlePhotoChange = (photo: string | null) => {
    setData((prev) => ({ ...prev, photoData: photo }));
  };

  const downloadPdf = async () => {
    const fileName = (data.fullName || "marathi-biodata")
      .replace(/\s+/g, "-")
      .toLowerCase();
    await generatePdf("biodata-preview-target", fileName);
  };

  return (
    <div className="app-shell">
      <header>
        {/* ... header content ... */}
        <p className="tag">संस्कारी प्रोफाइल</p>
        <h1>मराठी विवाह बायोडाटा</h1>
        <p className="subtitle">
          सोप्या पद्धतीने सुंदर विवाह बायोडाटा तयार करा.
        </p>
      </header>
      <main className="layout">
        <section className="panel form-panel">
          <PhotoUploader
            value={data.photoData ?? null}
            onChange={handlePhotoChange}
          />
          <BiodataForm sections={sections} data={data} onChange={handleChange} />
        </section>
        <section className="panel preview-panel">
          <div id="biodata-preview-target">
            <BiodataPreview sections={sections} data={data} />
          </div>
          <button className="primary" onClick={downloadPdf}>
            PDF डाउनलोड करा
          </button>
        </section>
      </main>
      <Analytics />
    </div>
  );
}

export default App;
