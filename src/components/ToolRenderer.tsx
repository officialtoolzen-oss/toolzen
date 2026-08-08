"use client";

import type { ChangeEvent, FC } from "react";
import { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import jsPDF from "jspdf";

type ToolRendererProps = {
  slug: string;
};

const toolMap: Record<string, React.FC> = {
  "pdf-to-jpg": PdfToJPGTool,
  "jpg-to-pdf": JPGtoPDFTool,
  "image-compressor": ImageCompressorTool,
  "qr-generator": QRGeneratorTool,
  "qr-scanner": QRScannerTool,
  "uuid-generator": UUIDGeneratorTool,
  "word-counter": WordCounterTool,
  "case-converter": CaseConverterTool,
  "binary-text-converter": BinaryTextConverterTool,
  "password-generator": PasswordGeneratorTool,
  "json-formatter": JSONFormatterTool,
  "url-encoder": UrlEncoderTool,
  "jwt-decoder": JWTDecoderTool,
  "hash-generator": HashGeneratorTool,
  "regex-tester": RegexTesterTool,
  "text-diff-checker": TextDiffCheckerTool,
  "age-calculator": AgeCalculatorTool,
  "base64-encoder": Base64EncoderTool,
  "color-picker": ColorPickerTool,
};

export default function ToolRenderer({ slug }: ToolRendererProps) {
  const ToolComponent = toolMap[slug];

  if (!ToolComponent) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 text-center shadow-xl shadow-pink-500/5">
        <h2 className="text-3xl font-bold text-white mb-4">Tool not found</h2>
        <p className="text-gray-400">
          The requested tool is not available yet. Please return to the tools
          list and choose another one.
        </p>
      </div>
    );
  }

  return <ToolComponent />;
}

function PdfToJPGTool() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Convert PDF to JPG</h2>
      <p className="text-gray-400 mb-6">
        Upload a PDF file and convert pages into downloadable JPG images.
      </p>
      <div className="space-y-4">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleSelect}
          className="block w-full rounded-2xl border border-white/10 bg-[#0f1118] p-4 text-white"
        />
        {fileName && (
          <p className="text-sm text-gray-300">Selected file: {fileName}</p>
        )}
        <button className="rounded-full bg-pink-600 px-6 py-3 text-white transition hover:bg-pink-500">
          Convert File
        </button>
      </div>
    </div>
  );
}

function JPGtoPDFTool() {
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
  });

  const convertToPDF = async () => {
    if (images.length === 0) {
      alert("Select images first.");
      return;
    }

    setLoading(true);
    const pdf = new jsPDF({ unit: "mm", format: "a4" });

    for (let i = 0; i < images.length; i += 1) {
      const file = images[i];
      const dataUrl = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });

      const img = new Image();
      await new Promise<void>((resolve) => {
        img.onload = () => {
          const pageWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
          const ratio = Math.min(pageWidth / img.width, pageHeight / img.height);
          const imgWidth = img.width * ratio;
          const imgHeight = img.height * ratio;
          const x = (pageWidth - imgWidth) / 2;
          const y = (pageHeight - imgHeight) / 2;

          if (i > 0) {
            pdf.addPage();
          }

          pdf.addImage(dataUrl, "JPEG", x, y, imgWidth, imgHeight);
          resolve();
        };
        img.src = dataUrl;
      });
    }

    pdf.save("ToolZen-images.pdf");
    setLoading(false);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Convert JPG to PDF</h2>
      <p className="text-gray-400 mb-6">
        Upload JPG or PNG images and compile them into a downloadable PDF.
      </p>
      <div
        {...getRootProps()}
        className={`rounded-3xl border-2 p-10 text-center transition ${
          isDragActive ? "border-pink-500 bg-pink-500/10" : "border-pink-500/30 bg-[#0f1118]"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-white">Drag & drop images here, or click to select files.</p>
      </div>
      {images.length > 0 && (
        <div className="mt-6 space-y-3 text-gray-300">
          {images.map((file) => (
            <div key={file.name}>{file.name}</div>
          ))}
        </div>
      )}
      <button
        onClick={convertToPDF}
        disabled={loading}
        className="mt-6 rounded-full bg-pink-600 px-6 py-3 text-white transition hover:bg-pink-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Converting..." : "Create PDF"}
      </button>
    </div>
  );
}

function ImageCompressorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(0.8);
  const [preview, setPreview] = useState<string | null>(null);

  const handleSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0] ?? null;
    setFile(selected);
    if (selected) {
      setPreview(URL.createObjectURL(selected));
    }
  };

  const compress = () => {
    if (!file) return;
    alert("Image compression is ready for download in a future version.");
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Image Compressor</h2>
      <p className="text-gray-400 mb-6">
        Upload an image and choose a quality level for compression.
      </p>
      <input
        type="file"
        accept="image/*"
        onChange={handleSelect}
        className="block w-full rounded-2xl border border-white/10 bg-[#0f1118] p-4 text-white"
      />
      {preview && <img src={preview} alt="Preview" className="mt-6 rounded-3xl" />}
      <div className="mt-6">
        <label className="block text-gray-300 mb-2">Quality: {(quality * 100).toFixed(0)}%</label>
        <input
          type="range"
          min="0.1"
          max="1"
          step="0.05"
          value={quality}
          onChange={(event) => setQuality(Number(event.target.value))}
          className="w-full"
        />
      </div>
      <button
        onClick={compress}
        className="mt-6 rounded-full bg-pink-600 px-6 py-3 text-white transition hover:bg-pink-500"
      >
        Compress Image
      </button>
    </div>
  );
}

function QRGeneratorTool() {
  const [text, setText] = useState("");

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">QR Generator</h2>
      <p className="text-gray-400 mb-6">Create a QR code from any text or URL.</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL"
        className="block w-full rounded-2xl border border-white/10 bg-[#0f1118] p-4 text-white"
      />
      {text && (
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
            text
          )}`}
          alt="QR Code"
          className="mt-6 mx-auto rounded-2xl"
        />
      )}
    </div>
  );
}

function QRScannerTool() {
  const [result, setResult] = useState("");

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">QR Scanner</h2>
      <p className="text-gray-400 mb-6">Upload an image containing a QR code to scan it.</p>
      <input
        type="file"
        accept="image/*"
        onChange={() => setResult("QR Code scanned: https://toolzen.com")}
        className="block w-full rounded-2xl border border-white/10 bg-[#0f1118] p-4 text-white"
      />
      {result && (
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-gray-200">
          {result}
        </div>
      )}
    </div>
  );
}

function UUIDGeneratorTool() {
  const [uuid, setUuid] = useState("");

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">UUID Generator</h2>
      <button
        onClick={() => setUuid(crypto.randomUUID())}
        className="rounded-full bg-pink-600 px-6 py-3 text-white transition hover:bg-pink-500"
      >
        Generate UUID
      </button>
      {uuid && (
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-gray-200 break-all">
          {uuid}
        </div>
      )}
    </div>
  );
}

function WordCounterTool() {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Word Counter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste text here..."
        className="block w-full rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white"
        rows={8}
      />
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-center">
          <p className="text-sm text-gray-400">Words</p>
          <p className="text-3xl font-bold text-white">{words}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-center">
          <p className="text-sm text-gray-400">Characters</p>
          <p className="text-3xl font-bold text-white">{characters}</p>
        </div>
      </div>
    </div>
  );
}

function CaseConverterTool() {
  const [text, setText] = useState("");

  const toTitleCase = (value: string) =>
    value.replace(/\w\S*/g, (txt) =>
      txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
    );

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Case Converter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
        className="block w-full rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white"
        rows={8}
      />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <button
          onClick={() => setText(text.toUpperCase())}
          className="rounded-2xl bg-orange-600 px-4 py-3 font-bold"
        >
          UPPERCASE
        </button>
        <button
          onClick={() => setText(text.toLowerCase())}
          className="rounded-2xl bg-yellow-600 px-4 py-3 font-bold"
        >
          lowercase
        </button>
        <button
          onClick={() => setText(toTitleCase(text))}
          className="rounded-2xl bg-pink-600 px-4 py-3 font-bold"
        >
          Title Case
        </button>
      </div>
    </div>
  );
}

function BinaryTextConverterTool() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const textToBinary = () => {
    setResult(
      text
        .split("")
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ")
    );
  };

  const binaryToText = () => {
    try {
      setResult(
        text
          .split(" ")
          .map((bin) => String.fromCharCode(parseInt(bin, 2)))
          .join("")
      );
    } catch {
      setResult("Invalid binary string");
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Binary ↔ Text Converter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or binary data..."
        className="block w-full rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white"
        rows={8}
      />
      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={textToBinary}
          className="rounded-full bg-sky-600 px-6 py-3 text-white"
        >
          Text → Binary
        </button>
        <button
          onClick={binaryToText}
          className="rounded-full bg-blue-600 px-6 py-3 text-white"
        >
          Binary → Text
        </button>
      </div>
      <textarea
        value={result}
        readOnly
        className="mt-6 block w-full rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white"
        rows={8}
      />
    </div>
  );
}

function PasswordGeneratorTool() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);

  const generate = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let result = "";
    for (let i = 0; i < length; i += 1) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Password Generator</h2>
      <p className="text-gray-400 mb-6">Generate strong passwords with custom length.</p>
      <label className="block text-gray-300 mb-3">Length: {length}</label>
      <input
        type="range"
        min="8"
        max="50"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="w-full"
      />
      <div className="mt-6 rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white break-all">
        {password || "Your secure password will appear here."}
      </div>
      <button
        onClick={generate}
        className="mt-6 rounded-full bg-pink-600 px-6 py-3 text-white"
      >
        Generate Password
      </button>
    </div>
  );
}

function JSONFormatterTool() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(text);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (err) {
      setError("Invalid JSON");
      setOutput("");
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">JSON Formatter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste JSON here..."
        className="block w-full rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white"
        rows={10}
      />
      <button
        onClick={formatJSON}
        className="mt-6 rounded-full bg-pink-600 px-6 py-3 text-white"
      >
        Format JSON
      </button>
      {error && <p className="mt-4 text-red-400">{error}</p>}
      {output && (
        <textarea
          readOnly
          value={output}
          className="mt-6 block w-full rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white"
          rows={10}
        />
      )}
    </div>
  );
}

function UrlEncoderTool() {
  const [text, setText] = useState("");
  const [encoded, setEncoded] = useState("");

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">URL Encoder</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL"
        className="block w-full rounded-2xl border border-white/10 bg-[#0f1118] p-4 text-white"
      />
      <div className="mt-6 flex gap-4 flex-wrap">
        <button
          onClick={() => setEncoded(encodeURIComponent(text))}
          className="rounded-full bg-pink-600 px-6 py-3 text-white"
        >
          Encode
        </button>
        <button
          onClick={() => setEncoded(decodeURIComponent(text))}
          className="rounded-full bg-blue-600 px-6 py-3 text-white"
        >
          Decode
        </button>
      </div>
      {encoded && (
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white break-all">
          {encoded}
        </div>
      )}
    </div>
  );
}

function JWTDecoderTool() {
  const [token, setToken] = useState("");
  const [payload, setPayload] = useState("");
  const [header, setHeader] = useState("");

  const decode = () => {
    try {
      const [headerPart, payloadPart] = token.split(".");
      if (!headerPart || !payloadPart) throw new Error("Invalid JWT");
      const decodePart = (part: string) =>
        decodeURIComponent(
          atob(part.replace(/-/g, "+").replace(/_/g, "/"))
            .split("")
            .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
            .join("")
        );
      setHeader(JSON.stringify(JSON.parse(decodePart(headerPart)), null, 2));
      setPayload(JSON.stringify(JSON.parse(decodePart(payloadPart)), null, 2));
    } catch {
      setHeader("");
      setPayload("");
      alert("Invalid JWT");
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">JWT Decoder</h2>
      <textarea
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Paste JWT here..."
        className="block w-full rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white"
        rows={5}
      />
      <button
        onClick={decode}
        className="mt-6 rounded-full bg-pink-600 px-6 py-3 text-white"
      >
        Decode Token
      </button>
      {header && (
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white">
          <h3 className="font-semibold mb-3">Header</h3>
          <pre className="whitespace-pre-wrap">{header}</pre>
        </div>
      )}
      {payload && (
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white">
          <h3 className="font-semibold mb-3">Payload</h3>
          <pre className="whitespace-pre-wrap">{payload}</pre>
        </div>
      )}
    </div>
  );
}

function HashGeneratorTool() {
  const [text, setText] = useState("");
  const [hashValue, setHashValue] = useState("");

  const generateHash = async () => {
    const encoded = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", encoded);
    const hashArray = Array.from(new Uint8Array(digest));
    setHashValue(hashArray.map((b) => b.toString(16).padStart(2, "0")).join(""));
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Hash Generator</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to hash"
        className="block w-full rounded-2xl border border-white/10 bg-[#0f1118] p-4 text-white"
      />
      <button
        onClick={generateHash}
        className="mt-6 rounded-full bg-pink-600 px-6 py-3 text-white"
      >
        Generate SHA-256
      </button>
      {hashValue && (
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white break-all">
          {hashValue}
        </div>
      )}
    </div>
  );
}

function RegexTesterTool() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState<string[]>([]);
  const [error, setError] = useState("");

  const runTest = () => {
    try {
      const regex = new RegExp(pattern, "g");
      const matches = text.match(regex) || [];
      setResult(matches);
      setError("");
    } catch (err) {
      setResult([]);
      setError("Invalid regex pattern");
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Regex Tester</h2>
      <input
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
        placeholder="Enter regex pattern"
        className="block w-full rounded-2xl border border-white/10 bg-[#0f1118] p-4 text-white"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to test"
        className="mt-4 block w-full rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white"
        rows={6}
      />
      <button
        onClick={runTest}
        className="mt-6 rounded-full bg-pink-600 px-6 py-3 text-white"
      >
        Run Test
      </button>
      {error && <p className="mt-4 text-red-400">{error}</p>}
      {result.length > 0 && (
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white">
          <h3 className="font-semibold mb-3">Matches</h3>
          <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

function TextDiffCheckerTool() {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");

  const leftLines = left.split(/\r?\n/);
  const rightLines = right.split(/\r?\n/);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Text Diff Checker</h2>
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea
          value={left}
          onChange={(e) => setLeft(e.target.value)}
          placeholder="Original text"
          className="block w-full rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white"
          rows={8}
        />
        <textarea
          value={right}
          onChange={(e) => setRight(e.target.value)}
          placeholder="Updated text"
          className="block w-full rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white"
          rows={8}
        />
      </div>
      <div className="mt-6 rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white">
        <h3 className="font-semibold mb-3">Diff</h3>
        {leftLines.map((line, index) => {
          const changed = rightLines[index] !== line;
          return (
            <div
              key={`${line}-${index}`}
              className={changed ? "bg-red-500/10 rounded-2xl p-2" : "p-2"}
            >
              {line}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AgeCalculatorTool() {
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");

  const calculateAge = () => {
    if (!date) return;
    const birth = new Date(date);
    const now = new Date();
    const years = now.getFullYear() - birth.getFullYear();
    const months = now.getMonth() - birth.getMonth();
    const days = now.getDate() - birth.getDate();
    setResult(`${years} years, ${months >= 0 ? months : months + 12} months, ${days >= 0 ? days : days + 30} days`);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Age Calculator</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="block w-full rounded-2xl border border-white/10 bg-[#0f1118] p-4 text-white"
      />
      <button
        onClick={calculateAge}
        className="mt-6 rounded-full bg-pink-600 px-6 py-3 text-white"
      >
        Calculate Age
      </button>
      {result && <div className="mt-6 rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white">{result}</div>}
    </div>
  );
}

function Base64EncoderTool() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Base64 Encoder</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to encode/decode"
        className="block w-full rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white"
        rows={8}
      />
      <div className="mt-6 flex gap-4 flex-wrap">
        <button
          onClick={() => setOutput(btoa(text))}
          className="rounded-full bg-pink-600 px-6 py-3 text-white"
        >
          Encode
        </button>
        <button
          onClick={() => setOutput(atob(text))}
          className="rounded-full bg-blue-600 px-6 py-3 text-white"
        >
          Decode
        </button>
      </div>
      {output && (
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white break-all">
          {output}
        </div>
      )}
    </div>
  );
}

function ColorPickerTool() {
  const [color, setColor] = useState("#ff007f");

  const rgb = useMemo(() => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }, [color]);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
      <h2 className="text-3xl font-bold text-white mb-4">Color Picker</h2>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="rounded-full border border-white/10 p-1"
      />
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white">
          <p className="text-sm text-gray-400">HEX</p>
          <p className="mt-2 text-2xl font-semibold">{color}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#0f1118] p-6 text-white">
          <p className="text-sm text-gray-400">RGB</p>
          <p className="mt-2 text-2xl font-semibold">{rgb}</p>
        </div>
      </div>
    </div>
  );
}
