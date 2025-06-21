import { Link } from "react-router-dom";
import compassLogo from "../logo/image.png";
import {
  CarIcon,
  HeartPulseIcon,
  HomeIcon,
  AlertTriangleIcon,
  TruckIcon,
  BriefcaseIcon,
} from "lucide-react";

const Footer = () => {
  const insuranceCards = [
    { title: "Car Insurance", icon: <CarIcon className="w-4 h-4" /> },
    { title: "Health Insurance", icon: <HeartPulseIcon className="w-4 h-4" /> },
    { title: "Home Insurance", icon: <HomeIcon className="w-4 h-4" /> },
    {
      title: "Fire Insurance",
      icon: <AlertTriangleIcon className="w-4 h-4" />,
    },
    { title: "Commercial Vehicle", icon: <TruckIcon className="w-4 h-4" /> },
    {
      title: "Other Type Of Insurance",
      icon: <BriefcaseIcon className="w-4 h-4" />,
    },
  ];

  const companyLinks = [
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61573651393872",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/compassinsuranceconsultancy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/compass-insurance-consultancy/",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0d1525] text-gray-400 pt-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-10 border-b border-gray-700">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src={compassLogo}
              alt="Compass Insurance Logo"
              className="h-12 w-auto mr-3 object-contain"
            />
            <span className="text-white text-xl font-bold">
              COMPASS INSURANCE CONSULTANCY
            </span>
          </div>
          <p className="text-sm mb-4">
            Find the perfect insurance coverage at the best prices. Compare
            quotes from top providers.
          </p>
        </div>

        {/* Insurance Types */}
        <div>
          <h3 className="text-white font-semibold mb-4">Insurance Types</h3>
          <ul className="space-y-3 text-sm">
            {insuranceCards.map((insurance) => (
              <li key={insurance.title}>
                <Link
                  to="/services"
                  className="hover:text-blue-400 transition flex items-center gap-2"
                >
                  {insurance.icon}
                  {insurance.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            {companyLinks.map((link) => (
              <li key={link.title}>
                <Link to={link.path} className="hover:text-blue-400 transition">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
          <p className="text-sm mb-4">Stay connected with us on social media</p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 py-6">
        <div>
          © 2025 COMPASS INSURANCE CONSULTANCY. All rights reserved. IRDAI
          License No: BAG10095434
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQH6thaxL8PY3gAAAZeINfUYAVCf7Q-nJDqlJd5tYWlDWGPGGdFRKTdnThtGw6poBunvHjHxoF4MLqtPdSNYvd6qTm0KQIWUyXgIqB4rXntGVj2WNNDn-3DaUWaEDT197qcV_Hw=&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fraj-mistry-b129751b1%2F"
          className="mt-2 md:mt-0 flex items-center hover:text-gray-700 transition-colors"
        >
          <span className="mr-1">Made By Raj Mistry</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
