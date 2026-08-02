"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function JpgToPdfPage() {
  const [image, setImage] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const downloadPDF = () => {
    if (!image) return;

    const pdf = new jsPDF();

    pdf.addImage(image, "JPEG", 10, 10, 180, 120);

    pdf.save("toolzen.pdf");
  };

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">
        JPG to PDF Converter
      </h1>

      <p className="text-gray-600 mb-6">
        Upload a JPG image and convert it into PDF.
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
      />

      {image && (
        <div className="mt-8">
          <img
            src={image}
            alt="Preview"
            className="max-w-md rounded-lg border"
          />

          <button
            onClick={downloadPDF}
            className="mt-4 px-6 py-3 bg-black text-white rounded-xl"
          >
            Download PDF
          </button>
        </div>
      )}
    </main>
  );
}