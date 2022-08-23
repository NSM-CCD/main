import React from "react"
import { Link } from "gatsby"
import logo from "../../images/american-collectors-logo.svg"

const Header = ({ ctaBackgroundColor }) => (
  <header>
    <nav className="container navbar py-3">
      <Link to="/" href="#">
        <img src={logo} alt="American Collectors" className="img-fluid" />
      </Link>
      <button className={`btn-cta ${ctaBackgroundColor}`}>
        Get Insured
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="#344054"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  </header>
)

export default Header
