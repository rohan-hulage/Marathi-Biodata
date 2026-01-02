import type { ChangeEvent } from "react";

const MAX_FILE_SIZE = 3 * 1024 * 1024;

type Props = {
  value: string | null | undefined;
  onChange: (data: string | null) => void;
};

export function PhotoUploader({ value, onChange }: Props) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      onChange(null);
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      alert("फोटो 3 MB पेक्षा कमी आकाराचा असावा.");
      event.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : null;
      onChange(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="photo-uploader">
      <label className="photo-field">
        <span>प्रोफाइल फोटो</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          aria-label="प्रोफाइल फोटो अपलोड"
        />
        <small>JPG / PNG (कमाल 3MB)</small>
      </label>
      <div className={`photo-frame ${value ? "has-photo" : ""}`}>
        {value ? (
          <img src={value} alt="अपलोड केलेला फोटो" />
        ) : (
          <span>आपला फोटो</span>
        )}
      </div>
      {value && (
        <button type="button" className="ghost" onClick={() => onChange(null)}>
          फोटो काढून टाका
        </button>
      )}
    </div>
  );
}

