import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CarIcon,
  HeartPulseIcon,
  HomeIcon,
  ShieldCheckIcon,
  PlaneIcon,
  BriefcaseIcon,
  BikeIcon,
  DogIcon,
  ShipIcon,
  ShoppingBagIcon,
  GemIcon,
  StethoscopeIcon,
  HammerIcon,
  BuildingIcon,
  CalendarIcon,
  UserIcon,
  UsersIcon,
  AlertTriangleIcon,
  TruckIcon,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Services() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const services = [
    {
      title: "Car Insurance",
      description: "Comprehensive coverage for your personal vehicles.",
      icon: <CarIcon className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-50",
      path: "/insurance/car",
    },
    {
      title: "Third Party Insurance",
      description: "Mandatory coverage for liability to third parties.",
      icon: <ShieldCheckIcon className="h-8 w-8 text-green-600" />,
      color: "bg-green-100",
      hoverColor: "hover:bg-green-50",
      path: "/insurance/third-party",
    },
    {
      title: "Commercial Vehicle Insurance",
      description: "Specialized coverage for commercial vehicles.",
      icon: <TruckIcon className="h-8 w-8 text-purple-600" />,
      color: "bg-purple-100",
      hoverColor: "hover:bg-purple-50",
      path: "/insurance/commercial-vehicle",
    },
    {
      title: "Two Wheeler Insurance",
      description: "Coverage for bikes, scooters and motorcycles.",
      icon: <BikeIcon className="h-8 w-8 text-red-600" />,
      color: "bg-red-100",
      hoverColor: "hover:bg-red-50",
      path: "/insurance/two-wheeler",
    },
    {
      title: "Health Insurance",
      description: "Medical coverage for individuals and families.",
      icon: <HeartPulseIcon className="h-8 w-8 text-yellow-600" />,
      color: "bg-yellow-100",
      hoverColor: "hover:bg-yellow-50",
      path: "/insurance/health",
    },
    {
      title: "Travel Insurance",
      description: "Protection for domestic and international trips.",
      icon: <PlaneIcon className="h-8 w-8 text-indigo-600" />,
      color: "bg-indigo-100",
      hoverColor: "hover:bg-indigo-50",
      path: "/insurance/travel",
    },
    {
      title: "Home Insurance",
      description: "Protection for your home and belongings.",
      icon: <HomeIcon className="h-8 w-8 text-teal-600" />,
      color: "bg-teal-100",
      hoverColor: "hover:bg-teal-50",
      path: "/insurance/home",
    },
    {
      title: "Fire Insurance",
      description: "Coverage against fire-related damages.",
      icon: <AlertTriangleIcon className="h-8 w-8 text-pink-600" />,
      color: "bg-pink-100",
      hoverColor: "hover:bg-pink-50",
      path: "/insurance/fire",
    },
    {
      title: "Property Insurance",
      description: "Coverage for residential and commercial properties.",
      icon: <BuildingIcon className="h-8 w-8 text-orange-600" />,
      color: "bg-orange-100",
      hoverColor: "hover:bg-orange-50",
      path: "/insurance/property",
    },
    {
      title: "Personal Accident Insurance",
      description: "Coverage for accidental injuries and death.",
      icon: <UserIcon className="h-8 w-8 text-cyan-600" />,
      color: "bg-cyan-100",
      hoverColor: "hover:bg-cyan-50",
      path: "/insurance/personal-accident",
    },
    {
      title: "Marine Insurance",
      description: "Coverage for ships and cargo transportation.",
      icon: <ShipIcon className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-50",
      path: "/insurance/marine",
    },
    {
      title: "Workmen Compensation",
      description: "Workmen's compensation for employees.",
      icon: <HammerIcon className="h-8 w-8 text-green-600" />,
      color: "bg-green-100",
      hoverColor: "hover:bg-green-50",
      path: "/insurance/workmen-compensation",
    },
  ];

  return (
    <div className="relative font-sans">
      <ScrollToTop />
      <Header />

      <div className="pt-20 min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 md:px-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Insurance Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive protection for every aspect of your life. Choose from
            our wide range of insurance products.
          </p>
        </section>

        {/* Services Grid */}
        <div className="py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Available Insurance Plans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                to={service.path}
                key={index}
                className={`${service.color} ${service.hoverColor} rounded-xl shadow-md p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:z-10`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-800 transition flex items-center">
                    Learn More <span className="ml-1">→</span>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="bg-white py-16 px-6 md:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose COMPASS INSURANCE CONSULTANCY?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Trusted Partners",
                  description:
                    "We work with India's top insurance providers to bring you the best plans.",
                  icon: "🤝",
                },
                {
                  title: "Instant Policies",
                  description:
                    "Get your policy documents instantly after purchase.",
                  icon: "⚡",
                },
                {
                  title: "24/7 Support",
                  description:
                    "Our customer care team is always available to assist you.",
                  icon: "📞",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-md"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-blue-50 py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Raj",
                rating: 5,
                comment:
                  "COMPASS INSURANCE CONSULTANCY helped me find the perfect health insurance at half the price I was paying before!",
                location: "Ahmedabad",
              },
              {
                name: "Mehul Parmar",
                rating: 4,
                comment:
                  "Excellent service! Very prompt, professional, and helpful throughout the process. Highly recommended.",
                location: "Mumbai",
              },
              {
                name: "Patel Dhruvit",
                rating: 5,
                comment:
                  "Excellent customer service experience and response from team.. thank you 😇.",
                location: "Ahmedabad",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
