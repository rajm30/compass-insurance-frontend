// pages/Contact.js
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: ""
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
      const response = await fetch("https://compass-insurance-backend.onrender.com/api/contact", {
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
          contactNumber: "",
          subject: "",
          message: ""
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
      console.error("Error submitting contact:", error);
      setSubmitStatus("error");
      setErrors([{ message: "Network error. Please check if the server is running." }]);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 md:px-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Our Team
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to help you with all your insurance needs and questions
          </p>
        </section>

        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
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
                        Message Sent Successfully!
                      </h3>
                      <p className="mt-1 text-sm text-green-700">
                        Thank you for contacting us. We'll get back to you as soon as possible.
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

              <form className="space-y-4" onSubmit={handleSubmit}>
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
                    placeholder="Your name"
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
                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Get a Quote</option>
                    <option value="claim">Claims Assistance</option>
                    <option value="policy">Policy Questions</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message here... (minimum 10 characters)"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 rounded-md transition ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <a
                    href="mailto:compassinsurances@gmail.com"
                    className="flex-shrink-0 bg-blue-100 p-3 rounded-lg"
                  >
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Email Us
                    </h3>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="mailto:compassinsurances@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        compassinsurances@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <a
                    href="tel:+919898907858"
                    className="flex-shrink-0 bg-blue-100 p-3 rounded-lg"
                  >
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </a>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Call Us
                    </h3>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="tel:+919898907858"
                        className="text-blue-600 hover:underline"
                      >
                        9898907858
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon-Fri: 8am to 8pm IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <a
                    target="_blank"
                    href="https://g.co/kgs/Ci3iyge"
                    className="flex-shrink-0 bg-blue-100 p-3 rounded-lg"
                  >
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </a>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 mt-1">
                      COMPASS INSURANCE CONSULTANCY
                      <br />B 327, Shalin Square, Hathijan Circle, Sardar Patel
                      Ring Rd, above Zudio Showroom, Vinzol, Ahmedabad, Gujarat
                      382445.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61573651393872"
                      target="_blank"
                      className="text-gray-500 hover:text-blue-600"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    {/* <a href="#" className="text-gray-500 hover:text-blue-600">
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a> */}
                    <a
                      href="https://www.instagram.com/compassinsuranceconsultancy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      className="text-gray-500 hover:text-blue-600"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/compass-insurance-consultancy/"
                      target="_blank"
                      className="text-gray-500 hover:text-blue-600"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16 px-6 md:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "How do I file a claim?",
                  answer:
                    "To file a claim, please call us at (+91)989-890-7858.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, net banking, UPI, and other popular payment methods in India.",
                },
                {
                  question: "Can I change my policy details after purchase?",
                  answer:
                    "Yes, you can modify certain aspects of your policy through your online account or by contacting customer support.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
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
