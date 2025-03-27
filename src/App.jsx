import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import ItineraryBuilder from "./pages/ItineraryBuilder.jsx"
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";


function App() {

  return (

    <div className="app-wrapper">
      <Navbar />
      <main className="container">

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/itinerary" element={<ItineraryBuilder />} />
    </Routes>

    </main>

    <Footer />

    </div>
  );
}

export default App;
