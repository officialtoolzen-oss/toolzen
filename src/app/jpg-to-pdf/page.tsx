"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import jsPDF from "jspdf";

export default function JPGtoPDF() {
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState("a4");
  const [orientation, setOrientation] = useState("portrait");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      onDrop,
    });

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const moveUp = (index: number) => {
    if (index === 0) return;

    const arr = [...images];

    [arr[index - 1], arr[index]] =
      [arr[index], arr[index - 1]];

    setImages(arr);
  };

  const moveDown = (index: number) => {
    if (index === images.length - 1) return;

    const arr = [...images];

    [arr[index + 1], arr[index]] =
      [arr[index], arr[index + 1]];

    setImages(arr);
  };

  const convertToPDF = async () => {
    if (images.length === 0) {
      alert("Select images first");
      return;
    }

    setLoading(true);

    const pdf = new jsPDF({
      orientation:
        orientation === "portrait" ? "p" : "l",
      unit: "mm",
      format: pageSize,
    });

    for (let i = 0; i < images.length; i++) {
      const file = images[i];

      const imageData = await new Promise<string>(
        (resolve) => {
          const reader = new FileReader();

          reader.onload = () =>
            resolve(reader.result as string);

          reader.readAsDataURL(file);
        }
      );

      const img = new Image();

      await new Promise<void>((resolve) => {
        img.onload = () => {
          const pageWidth =
            pdf.internal.pageSize.getWidth();

          const pageHeight =
            pdf.internal.pageSize.getHeight();

          const ratio = Math.min(
            pageWidth / img.width,
            pageHeight / img.height
          );

          const imgWidth = img.width * ratio;
          const imgHeight = img.height * ratio;

          const x =
            (pageWidth - imgWidth) / 2;

          const y =
            (pageHeight - imgHeight) / 2;

          if (i > 0) {
            pdf.addPage();
          }

          pdf.addImage(
            imageData,
            "JPEG",
            x,
            y,
            imgWidth,
            imgHeight
          );

          resolve();
        };

        img.src = imageData;
      });
    }

    pdf.save("ToolZen-PDF.pdf");

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
          JPG to PDF Converter
        </h1>

        <p className="text-gray-400 mt-4 text-xl">
          Premium PDF Conversion Tool
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <div className="bg-[#15151d] p-6 rounded-3xl border border-pink-500/20">

            <label className="block mb-3 font-bold">
              Page Size
            </label>

            <select
              value={pageSize}
              onChange={(e) =>
                setPageSize(e.target.value)
              }
              className="w-full bg-black p-4 rounded-xl"
            >
              <option value="a4">A4</option>
              <option value="letter">Letter</option>
            </select>

          </div>

          <div className="bg-[#15151d] p-6 rounded-3xl border border-pink-500/20">

            <label className="block mb-3 font-bold">
              Orientation
            </label>

            <select
              value={orientation}
              onChange={(e) =>
                setOrientation(e.target.value)
              }
              className="w-full bg-black p-4 rounded-xl"
            >
              <option value="portrait">
                Portrait
              </option>

              <option value="landscape">
                Landscape
              </option>
            </select>

          </div>

        </div>
                <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-3xl p-16 text-center cursor-pointer transition
          ${
            isDragActive
              ? "border-pink-500 bg-pink-500/10"
              : "border-pink-500/30 bg-[#15151d]"
          }`}
        >
          <input {...getInputProps()} />

          <h2 className="text-3xl font-bold mb-4">
            Drag & Drop Images
          </h2>

          <p className="text-gray-400">
            অথবা ক্লিক করে JPG / PNG Image Upload করুন
          </p>
        </div>

        {images.length > 0 && (
          <>
            <div className="mt-12 grid md:grid-cols-3 gap-6">

              {images.map((file, index) => (
                <div
                  key={index}
                  className="bg-[#15151d] rounded-3xl border border-pink-500/20 p-4"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="w-full h-48 object-cover rounded-2xl"
                  />

                  <p className="mt-4 text-sm truncate">
                    {file.name}
                  </p>

                  <div className="flex gap-2 mt-4">

                    <button
                      onClick={() => moveUp(index)}
                      className="flex-1 bg-blue-600 py-2 rounded-xl"
                    >
                      ↑
                    </button>

                    <button
                      onClick={() => moveDown(index)}
                      className="flex-1 bg-yellow-600 py-2 rounded-xl"
                    >
                      ↓
                    </button>

                    <button
                      onClick={() => removeImage(index)}
                      className="flex-1 bg-red-600 py-2 rounded-xl"
                    >
                      Delete
                    </button>

                  </div>
                </div>
              ))}

            </div>

            <div className="text-center mt-12">

              <button
                onClick={convertToPDF}
                disabled={loading}
                className="bg-gradient-to-r from-pink-600 to-purple-600 px-12 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition"
              >
                {loading
                  ? "Creating PDF..."
                  : "Convert & Download PDF"}
              </button>

            </div>
          </>
        )}

      </section>

      <footer className="border-t border-pink-500/20 mt-20 py-10 text-center">

        <h3 className="text-3xl font-bold text-pink-500">
          ToolZen
        </h3>

        <p className="text-gray-400 mt-3">
          Premium Online Tools Platform
        </p>

        <p className="text-gray-500 mt-4 text-sm">
          © 2026 ToolZen. All Rights Reserved.
        </p>

      </footer>

    </main>
  );
}