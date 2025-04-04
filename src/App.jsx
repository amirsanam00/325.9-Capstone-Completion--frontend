import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import ItineraryBuilder from "./pages/ItineraryBuilder.jsx"
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Contact from "./pages/Contact"
import SavedItineraries from "./pages/SavedItineraries";



function App() {

  return (

    <div className="app-wrapper">
      <Navbar />
      <main className="container">

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/itinerary" element={<ItineraryBuilder />} />
        <Route path="/saved-itineraries" element={<SavedItineraries />} />
        <Route path="/contact" element={<Contact />} />
    </Routes> 

    </main>

    <Footer />

    </div>
  );
}

export default App;
