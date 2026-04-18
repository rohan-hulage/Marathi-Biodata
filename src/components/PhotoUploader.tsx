import type { ChangeEvent } from "react";

const MAX_FILE_SIZE = 15 * 1024 * 1024;

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
      alert("फोटो 15 MB पेक्षा कमी आकाराचा असावा.");
      event.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : null;
      if (result) {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            onChange(result);
            return;
          }
          // Target 4x dimensions (520x680) for exactly matching the 130x170 panel shape without stretching, staying crisp at high resolutions
          const targetW = 520;
          const targetH = 680;
          canvas.width = targetW;
          canvas.height = targetH;

          // Compute 'object-fit: cover' style crop
          const imgRatio = img.width / img.height;
          const targetRatio = targetW / targetH;
          let sWidth = img.width, sHeight = img.height, sx = 0, sy = 0;

          if (imgRatio > targetRatio) {
            sWidth = img.height * targetRatio;
            sx = (img.width - sWidth) / 2;
          } else {
            sHeight = img.width / targetRatio;
            sy = (img.height - sHeight) / 2;
          }

          ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, targetW, targetH);
          const compressedImage = canvas.toDataURL("image/jpeg", 0.95);
          onChange(compressedImage);
        };
        img.src = result;
      } else {
        onChange(null);
      }
    };
    reader.readAsDataURL(file);
    
    // Reset the input value so selecting the same file again triggers onChange
    event.target.value = "";
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
        <small>JPG / PNG (कमाल 15MB)</small>
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

