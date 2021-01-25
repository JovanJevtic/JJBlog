import { Link } from 'react-router-dom';
import '../styling/style.css';

const Nav = () => {
    return (
        <div className="header">
            <nav className="container">
                <div className="logo-wrapp">
                    <Link to="/" className="logo">JevDev Blog</Link>
                </div>
                <ul className="nav-links">
                    <li><Link className="nav-link" to="/"> Home </Link></li>
                    <li><Link className="nav-link" to="/explore"> Explore </Link></li>
                    <li><Link className="nav-link" to="/about"> About </Link></li>
                    <li><Link className="nav-link" to="/contact"> Contact </Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
