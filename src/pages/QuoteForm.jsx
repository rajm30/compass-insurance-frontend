import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    insuranceType: "",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://compass-insurance-backend.onrender.com/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          insuranceType: "",
          additionalInfo: ""
        });
      } else {
        setSubmitStatus("error");
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setErrors([{ message: result.message || "Something went wrong" }]);
        }
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
      setSubmitStatus("error");
      setErrors([{ message: "Network error. Please check if the server is running." }]);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="font-sans">
      <ScrollToTop />
      <Header />

      <div className="pt-20">
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 md:px-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Insurance Quote
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Complete this simple form and we'll provide you with a personalized
            quote
          </p>
        </section>

        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Quote Request Form
              </h2>
              
              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">
                        Quote Request Submitted Successfully!
                      </h3>
                      <p className="mt-1 text-sm text-green-700">
                        Thank you for your request. We'll get back to you within 24 hours with your personalized quote.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Messages */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        There were errors with your submission
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <ul className="list-disc list-inside space-y-1">
                          {errors.map((error, index) => (
                            <li key={index}>{error.message}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="insuranceType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Insurance Type
                    </label>
                    <select
                      id="insuranceType"
                      name="insuranceType"
                      value={formData.insuranceType}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Insurance Type</option>
                      <option value="health">Health Insurance</option>
                      <option value="motor">Motor Insurance</option>
                      <option value="life">Life Insurance</option>
                      <option value="home">Home Insurance</option>
                      <option value="travel">Travel Insurance</option>
                      <option value="commercial">Commercial Insurance</option>
                      <option value="marine">Marine Insurance</option>
                      <option value="fire">Fire Insurance</option>
                      <option value="liability">Liability Insurance</option>
                      <option value="personal-accident">
                        Personal Accident
                      </option>
                      <option value="critical-illness">Critical Illness</option>
                      <option value="senior-citizen">
                        Senior Citizen Plans
                      </option>
                      <option value="child">Child Plans</option>
                      <option value="term">Term Insurance</option>
                      <option value="endowment">Endowment Plans</option>
                      <option value="ulip">ULIPs</option>
                      <option value="pension">Pension Plans</option>
                      <option value="two-wheeler">Two Wheeler Insurance</option>
                      <option value="commercial-vehicle">
                        Commercial Vehicle
                      </option>
                      <option value="crop">Crop Insurance</option>
                      <option value="pet">Pet Insurance</option>
                      <option value="cyber">Cyber Insurance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>                <div>
                  <label
                    htmlFor="additionalInfo"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Any specific requirements or details..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-md font-medium text-lg transition ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Get My Quote"}
                </button>
              </form>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Prefer to talk to an agent?
              </h3>
              <p className="text-gray-600 mb-6">
                Call us at{" "}
                <a
                  href="tel:9898907858"
                  className="text-blue-600 font-medium hover:underline"
                >
                  9898907858
                </a>{" "}
                or{" "}
                <a
                  href="mailto:compassinsurances@gmail.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  compassinsurances@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16 px-6 md:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why Get a Quote From Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Competitive Rates",
                  description:
                    "We compare multiple insurers to get you the best possible price for your coverage needs.",
                },
                {
                  title: "Expert Advice",
                  description:
                    "Our licensed agents will help you understand all options and recommend the best coverage.",
                },
                {
                  title: "Quick Processing",
                  description:
                    "Receive your personalized quote within 24 hours of submitting this form.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm text-center"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          index === 0
                            ? "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            : index === 1
                            ? "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            : "M13 10V3L4 14h7v7l9-11h-7z"
                        }
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
