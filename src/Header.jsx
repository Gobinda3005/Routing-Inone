import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
		<header>
			{/* <img src={ } alt={ } /> */}
			{/* <nav>
				<button>
					<Link to='/'>Counter</Link>
				</button>
				<button>
					<Link to='/Counter'>Counter</Link>
				</button>
                <button>
					<Link to='/Accordin'>Accordin</Link>
				</button>
				<button>
					<Link to='/Bgchange'>Bgchange</Link>
				</button>
                <button>
					<Link to='/Context'>Context</Link>
				</button>
                <button>
					<Link to='/Qupdate'>Qupdate</Link>
				</button>
                <button>
					<Link to='/Ddown'>Ddown</Link>
				</button>
                <button>
					<Link to='/Effect'>Effect</Link>
				</button>
                <button>
					<Link to='/Movieeffect'>Movieeffect</Link>
				</button>
                <button>
					<Link to='/Regform'>Regform</Link>
				</button>
                <button>
					<Link to='/Todo'>Todo</Link>
				</button>
			</nav> */}

<nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">React <span className='badge bg-danger text-light'>All in</span> One</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Project Work</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          {/* <li className="nav-item">
                <button>
					<Link to='/Movieeffect'>Movieeffect</Link>
				</button>
        </li> */}
          <li className="nav-item">
            <button>
					     <Link to='/'>LoginForm</Link>
				    </button>
          </li>
          <li className="nav-item">
              <button>
					      <Link to='/LoginForm'>LoginForm</Link>
				      </button>
          </li>
          <li className="nav-item">
              <button>
					      <Link to='/Accordin'>Accordin</Link>
				      </button>
          </li>
          <li className="nav-item">
              <button>
              <Link to='/Accordin'>Accordin</Link>
				      </button>
          </li>
          <li className="nav-item">
              <button>
              <Link to='/Accordin'>Accordin</Link>
				      </button>
          </li>
          <li className="nav-item">
              <button>
              <Link to='/Accordin'>Accordin</Link>
				      </button>
          </li>
          <li className="nav-item">
              <button>
              <Link to='/Accordin'>Accordin</Link>
				      </button>
          </li>
          <li className="nav-item">
              <button>
              <Link to='/Accordin'>Accordin</Link>
				      </button>
          </li>
          <li className="nav-item">
              <button>
              <Link to='/Accordin'>Accordin</Link>
				      </button>
          </li>
          <li className="nav-item">
              <button>
              <Link to='/Accordin'>Accordin</Link>
				      </button>
          </li>
          <li className="nav-item">
              <button>
					      <Link to='/Todo'>Todo</Link>
				      </button>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
		</header>
	)
}

export default Header