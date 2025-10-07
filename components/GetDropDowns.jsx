

"use client";
import React from "react";

export const lgaOptions = [
  { value: "aba-north", label: "Aba North" },
  { value: "aba-south", label: "Aba South" },
  { value: "arochukwu", label: "Arochukwu" },
  { value: "bende", label: "Bende" },
  { value: "ikwuano", label: "Ikwuano" },
  { value: "isiala-ngwa-north", label: "Isiala Ngwa North" },
  { value: "isiala-ngwa-south", label: "Isiala Ngwa South" },
  { value: "isuikwuato", label: "Isuikwuato" },
  { value: "obi-ngwa", label: "Obi Ngwa" },
  { value: "ohafia", label: "Ohafia" },
  { value: "osisioma", label: "Osisioma" },
  { value: "ugwunagbo", label: "Ugwunagbo" },
  { value: "ukwa-east", label: "Ukwa East" },
  { value: "ukwa-west", label: "Ukwa West" },
  { value: "umuahia-north", label: "Umuahia North" },
  { value: "umuahia-south", label: "Umuahia South" },
  { value: "umu-nneochi", label: "Umu Nneochi" }
];

export const schoolOptions = [
  { value: "efemini-primary", label: "Efemini Primary School" },
  { value: "community-primary", label: "Community Primary School" },
  { value: "government-secondary", label: "Government Secondary School" }
];

export function LGADropdown({ value, onChange, required = false, name = "lga" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">LGA</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        required={required}
      >
        <option value="">Select LGA</option>
        {lgaOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

export function SchoolDropdown({ value, onChange, required = false, name = "school" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">School</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        required={required}
      >
        <option value="">Select School</option>
        {schoolOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

// EXISTING DROPDOWN OPTIONS
export const GetDropDowns = {
  getExamYears: () => [
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" }
  ],
  getExamTypes: () => [
    { value: "GPT", label: "GPT" },
    { value: "PSCLE", label: "PSCLE" }
  ],
  getStatusOptions: () => [
    { value: "All", label: "All" },
    { value: "Pending", label: "Pending" },
    { value: "Approved", label: "Approved" }
  ]
};

export default GetDropDowns;
