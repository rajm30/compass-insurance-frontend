import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import compassLogo from "../logo/Screenshot 2025-06-15 114647.png";
import {
  CarIcon,
  HeartPulseIcon,
  HomeIcon,
  ShieldCheckIcon,
  PlaneIcon,
  BriefcaseIcon,
  BikeIcon,
  ShipIcon,
  StethoscopeIcon,
  HammerIcon,
  BuildingIcon,
  UserIcon,
  AlertTriangleIcon,
  TruckIcon,
  TrendingUpIcon,
  ClockIcon,
  HeadphonesIcon,
  CheckCircleIcon,
  AwardIcon,
} from "lucide-react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "15+", label: "Insurance Partners" },
    { value: "₹10Cr+", label: "Claims Settled" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  const features = [
    {
      icon: <TrendingUpIcon className="h-10 w-10 text-amber-500" />,
      title: "Best Prices Guaranteed",
      description:
        "We compare prices from top insurers to get you the best deal",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      hoverColor: "hover:bg-amber-100",
    },
    {
      icon: <ClockIcon className="h-10 w-10 text-blue-500" />,
      title: "Instant Policy Issuance",
      description: "Get your policy document instantly after payment",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      hoverColor: "hover:bg-blue-100",
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-emerald-500" />,
      title: "24/7 Support",
      description: "Our experts are always available to assist you",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      hoverColor: "hover:bg-emerald-100",
    },
    {
      icon: <CheckCircleIcon className="h-10 w-10 text-purple-500" />,
      title: "Easy Claims Process",
      description: "Hassle-free claim settlement with our guidance",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      hoverColor: "hover:bg-purple-100",
    },
  ];

  const allInsurances = [
    {
      title: "Car Insurance",
      icon: <CarIcon className="h-8 w-8 text-blue-600" />,
      link: "/insurance/car",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      hoverColor: "hover:bg-blue-100",
    },
    {
      title: "Health Insurance",
      icon: <HeartPulseIcon className="h-8 w-8 text-red-600" />,
      link: "/insurance/health",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      hoverColor: "hover:bg-red-100",
    },
    {
      title: "Home Insurance",
      icon: <HomeIcon className="h-8 w-8 text-emerald-600" />,
      link: "/insurance/home",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      hoverColor: "hover:bg-emerald-100",
    },
    {
      title: "Travel Insurance",
      icon: <PlaneIcon className="h-8 w-8 text-amber-600" />,
      link: "/insurance/travel",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
      hoverColor: "hover:bg-amber-100",
    },
    {
      title: "Third Party Insurance",
      icon: <ShieldCheckIcon className="h-8 w-8 text-green-600" />,
      link: "/insurance/third-party",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      hoverColor: "hover:bg-green-100",
    },
    {
      title: "Commercial Vehicle",
      icon: <TruckIcon className="h-8 w-8 text-purple-600" />,
      link: "/insurance/commercial-vehicle",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      hoverColor: "hover:bg-purple-100",
    },
    {
      title: "Two Wheeler",
      icon: <BikeIcon className="h-8 w-8 text-red-600" />,
      link: "/insurance/two-wheeler",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      hoverColor: "hover:bg-red-100",
    },
    {
      title: "Fire Insurance",
      icon: <AlertTriangleIcon className="h-8 w-8 text-pink-600" />,
      link: "/insurance/fire",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
      hoverColor: "hover:bg-pink-100",
    },
    {
      title: "Property Insurance",
      icon: <BuildingIcon className="h-8 w-8 text-orange-600" />,
      link: "/insurance/property",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      hoverColor: "hover:bg-orange-100",
    },
    {
      title: "Personal Accident",
      icon: <UserIcon className="h-8 w-8 text-cyan-600" />,
      link: "/insurance/personal-accident",
      bgColor: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      hoverColor: "hover:bg-cyan-100",
    },
    {
      title: "Marine Insurance",
      icon: <ShipIcon className="h-8 w-8 text-blue-600" />,
      link: "/insurance/marine",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      hoverColor: "hover:bg-blue-100",
    },
    {
      title: "Workmen Compensation",
      icon: <HammerIcon className="h-8 w-8 text-green-600" />,
      link: "/insurance/workmen-compensation",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      hoverColor: "hover:bg-green-100",
    },
  ];

  // Split into popular (first 4) and others
  const popularInsurances = allInsurances.slice(0, 4);
  const otherInsurances = allInsurances.slice(4);

  return (
    <div className="font-sans overflow-x-hidden">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 z-10 relative">
            <motion.div
              className="md:w-1/2 space-y-6 text-white"
              initial="hidden"
              animate="show"
              variants={slideInFromLeft}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Smart Insurance <br />
                <motion.span
                  className="text-blue-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Made Simple
                </motion.span>
              </h1>
              <motion.p
                className="text-lg md:text-xl text-blue-100 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Compare, choose and buy insurance in minutes. Save up to 40% on
                your premiums with India's most trusted insurance marketplace.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link
                  to="/services"
                  className="bg-transparent hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white text-center text-lg"
                >
                  Explore All Plans
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2 flex justify-center"
              initial="hidden"
              animate="show"
              variants={slideInFromRight}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-8 bg-blue-400 rounded-2xl transform rotate-6 opacity-20"
                  animate={{ rotate: 6 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 4,
                  }}
                ></motion.div>
                <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                  <img
                    src={compassLogo}
                    alt="Insurance Compass"
                    className="w-full h-auto max-w-md object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400 rounded-full opacity-10"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full opacity-10"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -10, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          ></motion.div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose Insurance Compass?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We make insurance simple, affordable and transparent
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`${feature.bgColor} ${feature.hoverColor} p-8 rounded-xl shadow-md transition-all duration-300`}
                  variants={item}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`mb-4 ${feature.textColor}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${feature.textColor}`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Popular Insurance Section */}
        <section className="py-16 bg-gray-50 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Popular Insurance Plans
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our most sought-after insurance products
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {popularInsurances.map((insurance, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={insurance.link}
                    className={`${insurance.bgColor} ${insurance.hoverColor} p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center text-center`}
                  >
                    <motion.div
                      className={`${insurance.iconBg} p-4 rounded-full mb-4`}
                      whileHover={{ rotate: 10 }}
                    >
                      {insurance.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {insurance.title}
                    </h3>
                    <p className="mt-2 text-blue-600 font-medium">Explore →</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* All Insurance Types Section */}
            {/* <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                All Insurance Types
              </h3>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                {otherInsurances.map((insurance, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.03 }}
                  >
                    <Link
                      to={insurance.link}
                      className={`${insurance.bgColor} ${insurance.hoverColor} p-4 rounded-lg shadow-sm transition-all duration-300 flex items-center gap-3`}
                    >
                      <div className={`${insurance.iconBg} p-2 rounded-lg`}>
                        {insurance.icon}
                      </div>
                      <span className="font-medium text-gray-800">
                        {insurance.title}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div> */}

            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View All Insurance Details
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        <HowItWorks />
        <Testimonials />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
