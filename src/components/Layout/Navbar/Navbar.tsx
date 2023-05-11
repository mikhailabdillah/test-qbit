import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="minibar">
      <div className="header">
        <div className="brand"></div>
      </div>
      <div className="content">
        <ul className="main-menu">
          <li className="menu-item active">
            <Link to="/" className="menu-link">
              <span className="icon ti-home"></span>
              <span className="caption">Home</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/about" className="menu-link">
              <span className="icon ti-user"></span>
              <span className="caption">About</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/posting" className="menu-link">
              <span className="icon ti-book"></span>
              <span className="caption">Posting</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/login" className="menu-link">
              <span className="icon ti-shift-right"></span>
              <span className="caption">Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
