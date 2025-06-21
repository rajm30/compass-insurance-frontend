import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      <ScrollToTop />
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 md:px-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About COMPASS INSURANCE CONSULTANCY
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in securing what matters most to you and your
            family
          </p>
        </section>

        {/* About Content */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2023, COMPASS INSURANCE CONSULTANCY was built on
                  over 16 years of industry experience with a clear mission: to
                  make insurance accessible and easy to understand for everyone.
                  What began as a small team of passionate experts has grown
                  into one of India's most trusted insurance
                  platforms—delivering clarity, choice, and confidence to
                  clients across the country.
                </p>
                <p className="text-gray-600">
                  Over the past decade, we've become a trusted name in
                  insurance, helping people find the perfect coverage for their
                  needs—with a 5/5 rating from our happy clients.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-8 h-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="auto"
                  viewBox="0 0 500 400"
                  className="max-h-80"
                >
                  {/* Office building */}
                  <rect
                    x="100"
                    y="150"
                    width="300"
                    height="200"
                    fill="#3B82F6"
                    opacity="0.8"
                    rx="10"
                  />
                  {/* Windows */}
                  {[120, 180, 240, 300, 360].map((x, i) => (
                    <rect
                      key={`win-${i}`}
                      x={x}
                      y="180"
                      width="40"
                      height="40"
                      fill="#BFDBFE"
                      rx="5"
                    />
                  ))}
                  {[120, 180, 240, 300, 360].map((x, i) => (
                    <rect
                      key={`win2-${i}`}
                      x={x}
                      y="250"
                      width="40"
                      height="40"
                      fill="#BFDBFE"
                      rx="5"
                    />
                  ))}
                  {/* Door */}
                  <rect
                    x="220"
                    y="280"
                    width="60"
                    height="70"
                    fill="#1D4ED8"
                    rx="5"
                  />
                  {/* Signboard */}
                  <rect
                    x="200"
                    y="120"
                    width="100"
                    height="30"
                    fill="#1E40AF"
                    rx="5"
                  />
                  <text
                    x="250"
                    y="140"
                    fill="white"
                    textAnchor="middle"
                    fontSize="14"
                    fontFamily="Arial"
                  >
                    COMPASS
                  </text>
                  {/* Growth arrow */}
                  <path
                    d="M400 100 L450 50 L500 100 L480 100 L480 200 L420 200 L420 100 Z"
                    fill="#10B981"
                  />
                  {/* Small people */}
                  <circle cx="150" cy="320" r="10" fill="#F59E0B" />
                  <circle cx="180" cy="320" r="10" fill="#EC4899" />
                  <circle cx="350" cy="320" r="10" fill="#8B5CF6" />
                </svg>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-4">
                  We believe everyone deserves transparent, affordable, and
                  reliable insurance coverage. Our platform simplifies the
                  complex world of insurance, helping you make informed
                  decisions about protecting what matters most.
                </p>
                <p className="text-gray-600">
                  We make insurance simple-compare top plans side by side and
                  choose what fits you best, without pressure or hidden terms.
                </p>
              </div>
              <div className="order-2 md:order-1 bg-blue-50 rounded-xl p-8 h-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="auto"
                  viewBox="0 0 500 400"
                  className="max-h-80"
                >
                  {/* Shield */}
                  <path
                    d="M250 50 L450 150 L450 300 L250 400 L50 300 L50 150 Z"
                    fill="#3B82F6"
                    opacity="0.8"
                  />
                  {/* Shield details */}
                  <path
                    d="M250 70 L430 160 L430 290 L250 380 L70 290 L70 160 Z"
                    fill="#1D4ED8"
                    opacity="0.6"
                  />
                  {/* Checkmark */}
                  <path
                    d="M200 220 L230 250 L300 180"
                    stroke="white"
                    strokeWidth="15"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Family */}
                  <circle cx="150" cy="150" r="20" fill="#F59E0B" />{" "}
                  {/* Child */}
                  <circle cx="200" cy="130" r="25" fill="#EC4899" />{" "}
                  {/* Mother */}
                  <circle cx="250" cy="130" r="25" fill="#3B82F6" />{" "}
                  {/* Father */}
                  {/* House */}
                  <path
                    d="M350 250 L400 200 L450 250 L450 300 L350 300 Z"
                    fill="#10B981"
                  />
                  <path d="M350 250 L400 200 L450 250" fill="#047857" />
                  <rect x="380" y="270" width="40" height="30" fill="#A5B4FC" />
                  {/* Heart */}
                  <path
                    d="M320 100 C360 60 400 80 400 120 C400 160 320 200 320 120 C320 200 240 160 240 120 C240 80 280 60 320 100 Z"
                    fill="#EF4444"
                  />
                </svg>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Transparency",
                    description: "No hidden fees or complicated fine print",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2a10 10 0 0 0-7.4 16.8" />
                        <path d="M12 2a10 10 0 0 1 7.4 16.8" />
                        <path d="M12 2v20" />
                        <path d="M2 12h20" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    ),
                  },
                  {
                    title: "Reliability",
                    description:
                      "Trusted by millions of customers across India",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    ),
                  },
                  {
                    title: "Innovation",
                    description: "Constantly improving our platform for you",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2v4" />
                        <path d="m16.24 7.76 2.83-2.83" />
                        <path d="M18 12h4" />
                        <path d="m16.24 16.24 2.83 2.83" />
                        <path d="M12 18v4" />
                        <path d="m7.76 16.24-2.83 2.83" />
                        <path d="M6 12H2" />
                        <path d="m7.76 7.76-2.83-2.83" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ),
                  },
                ].map((value, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to get started?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join millions of satisfied customers who trust COMPASS INSURANCE
                CONSULTANCY for their insurance needs.
              </p>
              <Link
                to="/quote"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
