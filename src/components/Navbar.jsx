import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 md:px-20 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">COMPASS INSURANCE CONSULTANCY</Link>
      </div>
      <nav className="hidden md:flex gap-6 text-gray-600 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/services" className="hover:text-blue-600">
          Plans
        </Link>
        <Link to="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-600">
          Contact
        </Link>
      </nav>
      <Link
        to="/quote"
        className="hidden md:block bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 text-sm"
      >
        Login
      </Link>
    </header>
  );
}
