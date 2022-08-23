import React from "react"
import { Link } from "gatsby"
import chevronRight from "../../images/icons/chevron-right.svg"
import logo from "../../images/american-collectors-logo.svg"

const Header = ({ ctaBackgroundColor }) => (
  <header>
    <nav className="container-xxl navbar py-3">
      <Link to="/" href="#">
        <img src={logo} alt="American Collectors" className="img-fluid" />
      </Link>
      <button className={`btn-cta ${ctaBackgroundColor}`}>
        Get Insured
        <img src={chevronRight} alt="Chevron right" />
      </button>
    </nav>
  </header>
)

export default Header
