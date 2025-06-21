// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import QuoteForm from "./pages/QuoteForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

// Insurance Pages
import CarInsurance from "./pages/insurance/CarInsurance";
import ThirdPartyInsurance from "./pages/insurance/ThirdPartyInsurance";
import CommercialVehicleInsurance from "./pages/insurance/CommercialVehicleInsurance";
import TwoWheelerInsurance from "./pages/insurance/TwoWheelerInsurance";
import HealthInsurance from "./pages/insurance/HealthInsurance";
import TravelInsurance from "./pages/insurance/TravelInsurance";
import HomeInsurance from "./pages/insurance/HomeInsurance";
import FireInsurance from "./pages/insurance/FireInsurance";
import PropertyInsurance from "./pages/insurance/PropertyInsurance";
import PersonalAccidentInsurance from "./pages/insurance/PersonalAccidentInsurance";
import MarineInsurance from "./pages/insurance/MarineInsurance";
import WorkmenCompensation from "./pages/insurance/WorkmenCompensation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/quote" element={<QuoteForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Admin-vishal989890@7858Patel@" element={<Admin />} />

        {/* Insurance Pages */}
        <Route path="/insurance/car" element={<CarInsurance />} />
        <Route
          path="/insurance/third-party"
          element={<ThirdPartyInsurance />}
        />
        <Route
          path="/insurance/commercial-vehicle"
          element={<CommercialVehicleInsurance />}
        />
        <Route
          path="/insurance/two-wheeler"
          element={<TwoWheelerInsurance />}
        />
        <Route path="/insurance/health" element={<HealthInsurance />} />
        <Route path="/insurance/travel" element={<TravelInsurance />} />
        <Route path="/insurance/home" element={<HomeInsurance />} />
        <Route path="/insurance/fire" element={<FireInsurance />} />
        <Route path="/insurance/property" element={<PropertyInsurance />} />
        <Route
          path="/insurance/personal-accident"
          element={<PersonalAccidentInsurance />}
        />
        <Route path="/insurance/marine" element={<MarineInsurance />} />
        <Route
          path="/insurance/workmen-compensation"
          element={<WorkmenCompensation />}
        />
      </Routes>
    </Router>
  );
}

export default App;
