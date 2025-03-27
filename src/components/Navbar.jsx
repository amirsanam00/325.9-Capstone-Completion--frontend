import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className = "navbar"> 

            <div className="navbar-content">

                <Link to = "/">Home</Link>
                <Link to = "/itinerary">My Itinerary</Link>
                <Link to="/saved">Saved Itineraries</Link>
                <Link to = "/contact">Contact</Link>

            </div>
        </nav>
    );
};

export default Navbar;