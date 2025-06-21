import { Link } from "react-router-dom";

const InsuranceCard = ({ card }) => {
  return (
    <Link
      to="/services"
      className="flip-card h-64 hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front */}
        <div
          className={`flip-card-front bg-gradient-to-b ${card.color} rounded-xl shadow p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300`}
        >
          <div className="text-blue-600 mb-3">{card.icon}</div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            {card.title}
          </h3>
          <p className="text-gray-600 text-sm text-center">{card.desc}</p>
        </div>

        {/* Back */}
        <div className="flip-card-back bg-blue-600 text-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
          <p className="text-sm text-center px-2">{card.extra}</p>
          <span className="mt-4 text-sm hover:text-blue-100 transition flex items-center">
            Learn More <span className="ml-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default InsuranceCard;
