import React from 'react';
import { Link } from 'react-router';

export default () => {
  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">LazyDevelopers</Link>
          </div>

          <div className="collapse navbar-collapse">
           <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup" className="navbar-brand">SignUp</Link></li>
          </ul>

          </div>

        </div>
      </nav>
  )
}
