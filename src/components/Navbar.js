import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid ">
            <a className="navbar-brand " href="/">Healtho</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  to="/work">How its work</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  to="/product">Product</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  to="/team">Our Team</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/faq">FAQ</Link>
                </li>
            </ul>
            
            <form className="d-flex">
                <Link to="/"><button className="btn btn-success" type="submit">Sign in</button></Link>
            </form>
        </div>
  </div>
</nav>
    </div>
  )
}
