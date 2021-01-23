import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/"> Home </Link>
            <Link to="/explore"> Explore </Link>
        </div>
    );
};

export default Nav;
