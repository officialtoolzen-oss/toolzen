"use client";

import { useState } from "react";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();

    const monthDiff =
      today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 &&
        today.getDate() < birthDate.getDate())
    ) {
      years--;
    }

    setAge(`${years} Years Old`);
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">
          Age Calculator
        </h1>

        <p className="text-gray-400 mt-4">
          Calculate your age instantly.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6">

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-4 rounded-2xl bg-[#15151d]"
        />

        <button
          onClick={calculateAge}
          className="mt-6 bg-lime-600 px-8 py-4 rounded-2xl font-bold"
        >
          Calculate Age
        </button>

        {age && (
          <div className="mt-8 bg-[#15151d] p-6 rounded-2xl text-3xl font-bold">
            {age}
          </div>
        )}

      </section>

    </main>
  );
}