import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>
      <Link to="/" className="logo">
        Bookstore
      </Link>
    </h1>
    <ul>
      <li><Link to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </nav>
);

export default Navbar;
