// src/components/InsuranceLayout.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CarIcon,
  ShieldCheckIcon,
  TruckIcon,
  BikeIcon,
  HeartPulseIcon,
  PlaneIcon,
  HomeIcon,
  AlertTriangleIcon,
  BuildingIcon,
  UserIcon,
  ShipIcon,
  HammerIcon,
} from "lucide-react";

const iconComponents = {
  CarIcon,
  ShieldCheckIcon,
  TruckIcon,
  BikeIcon,
  HeartPulseIcon,
  PlaneIcon,
  HomeIcon,
  AlertTriangleIcon,
  BuildingIcon,
  UserIcon,
  ShipIcon,
  HammerIcon,
};

export default function InsuranceLayout({
  title,
  description,
  features,
  whyChoose,
  icon,
  color,
}) {
  const IconComponent = iconComponents[icon];

  const colorClasses =
    {
      blue: {
        bg: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-600",
        bgLight: "bg-blue-50",
        from: "from-blue-50",
        to: "to-white",
      },
      green: {
        bg: "bg-green-600",
        text: "text-green-600",
        border: "border-green-600",
        bgLight: "bg-green-50",
        from: "from-green-50",
        to: "to-white",
      },
      purple: {
        bg: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-600",
        bgLight: "bg-purple-50",
        from: "from-purple-50",
        to: "to-white",
      },
      red: {
        bg: "bg-red-600",
        text: "text-red-600",
        border: "border-red-600",
        bgLight: "bg-red-50",
        from: "from-red-50",
        to: "to-white",
      },
      yellow: {
        bg: "bg-yellow-600",
        text: "text-yellow-600",
        border: "border-yellow-600",
        bgLight: "bg-yellow-50",
        from: "from-yellow-50",
        to: "to-white",
      },
      indigo: {
        bg: "bg-indigo-600",
        text: "text-indigo-600",
        border: "border-indigo-600",
        bgLight: "bg-indigo-50",
        from: "from-indigo-50",
        to: "to-white",
      },
      teal: {
        bg: "bg-teal-600",
        text: "text-teal-600",
        border: "border-teal-600",
        bgLight: "bg-teal-50",
        from: "from-teal-50",
        to: "to-white",
      },
      pink: {
        bg: "bg-pink-600",
        text: "text-pink-600",
        border: "border-pink-600",
        bgLight: "bg-pink-50",
        from: "from-pink-50",
        to: "to-white",
      },
      orange: {
        bg: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-600",
        bgLight: "bg-orange-50",
        from: "from-orange-50",
        to: "to-white",
      },
      cyan: {
        bg: "bg-cyan-600",
        text: "text-cyan-600",
        border: "border-cyan-600",
        bgLight: "bg-cyan-50",
        from: "from-cyan-50",
        to: "to-white",
      },
    }[color] || colorClasses.blue;

  return (
    <div
      className={`min-h-screen pt-20 bg-gradient-to-b ${colorClasses.from} ${colorClasses.to}`}
    >
      {/* Hero Section */}
      <section className={`${colorClasses.bg} text-white py-16 px-6 md:px-20`}>
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center text-sm text-white/80 mb-4">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span>{title}</span>
          </nav>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="bg-white/20 p-4 rounded-full">
              <IconComponent className="h-12 w-12" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl max-w-3xl">{description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Coverage Features
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className={`${colorClasses.bgLight} p-1 rounded-full mr-3 mt-1`}
                    >
                      <div
                        className={`${colorClasses.bg} w-2 h-2 rounded-full`}
                      ></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Why Choose Us
              </h2>
              <ul className="space-y-4">
                {whyChoose.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className={`${colorClasses.bgLight} p-1 rounded-full mr-3 mt-1`}
                    >
                      <div
                        className={`${colorClasses.bg} w-2 h-2 rounded-full`}
                      ></div>
                    </div>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mb-11  md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  Get Your {title} Now
                </h2>
                <p className="text-gray-600">
                  Fill out our quick quote form to get personalized rates and
                  coverage options.
                </p>
              </div>
              <Link
                to="/quote"
                className={`inline-block ${
                  colorClasses.bg
                } hover:${colorClasses.bg.replace(
                  "600",
                  "700"
                )} text-white font-medium py-3 px-8 rounded-lg transition whitespace-nowrap`}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          <div className="">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-4 bg-gray-100 rounded-lg"
            >
              <p className="text-sm text-gray-600 text-center">
                <span className="font-medium">Terms and conditions apply.</span>{" "}
                Management reserves the right to alter any terms and conditions
                at its discretion. For complete details, please refer to the
                policy wordings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
