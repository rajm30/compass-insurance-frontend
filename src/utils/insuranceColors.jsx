// src/utils/insuranceColors.js
export const insuranceColors = {
  car: {
    light: "from-blue-500 to-blue-700",
    dark: "bg-blue-600",
    text: "text-blue-600",
    border: "border-blue-100",
  },
  commercialvehicle: {
    light: "from-purple-500 to-purple-700",
    dark: "bg-purple-600",
    text: "text-purple-600",
    border: "border-purple-100",
  },
  fire: {
    light: "from-pink-500 to-pink-700",
    dark: "bg-pink-600",
    text: "text-pink-600",
    border: "border-pink-100",
  },
  health: {
    light: "from-yellow-500 to-yellow-700",
    dark: "bg-yellow-600",
    text: "text-yellow-600",
    border: "border-yellow-100",
  },
  home: {
    light: "from-teal-500 to-teal-700",
    dark: "bg-teal-600",
    text: "text-teal-600",
    border: "border-teal-100",
  },
  marine: {
    light: "from-blue-500 to-blue-700",
    dark: "bg-blue-600",
    text: "text-blue-600",
    border: "border-blue-100",
  },
  personalaccident: {
    light: "from-cyan-500 to-cyan-700",
    dark: "bg-cyan-600",
    text: "text-cyan-600",
    border: "border-cyan-100",
  },
  property: {
    light: "from-orange-500 to-orange-700",
    dark: "bg-orange-600",
    text: "text-orange-600",
    border: "border-orange-100",
  },
  thirdparty: {
    light: "from-green-500 to-green-700",
    dark: "bg-green-600",
    text: "text-green-600",
    border: "border-green-100",
  },
  travel: {
    light: "from-indigo-500 to-indigo-700",
    dark: "bg-indigo-600",
    text: "text-indigo-600",
    border: "border-indigo-100",
  },
  twowheeler: {
    light: "from-red-500 to-red-700",
    dark: "bg-red-600",
    text: "text-red-600",
    border: "border-red-100",
  },
  workmencompensation: {
    light: "from-green-500 to-green-700",
    dark: "bg-green-600",
    text: "text-green-600",
    border: "border-green-100",
  },
  default: {
    light: "from-blue-600 to-blue-800",
    dark: "bg-blue-600",
    text: "text-blue-600",
    border: "border-blue-100",
  },
};

export const getInsuranceColor = (insuranceType) => {
  if (!insuranceType) return insuranceColors.default;

  // Normalize the insurance type (remove spaces and make lowercase)
  const type = insuranceType.toLowerCase().replace(/\s+/g, "");
  return insuranceColors[type] || insuranceColors.default;
};
