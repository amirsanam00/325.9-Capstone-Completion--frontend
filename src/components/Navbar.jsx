import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className = "navbar"> 

            <div className="navbar-content">

                <Link to = "/">Home</Link>
                <Link to = "/itinerary">My Itinerary</Link>

            </div>
        </nav>
    );
};

export default Navbar;