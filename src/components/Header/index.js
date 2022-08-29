import React from "react"
import { Link } from "gatsby"
import { HeaderMain } from "./header.styles"
import logo from "../../images/logo-new.webp"

const Header = ({ ctaBackgroundColor }) => (
  <HeaderMain>
    <nav className="container navbar">
      <Link to="/" href="#">
        <img src={logo} alt="American Collectors" className="logo img-fluid" />
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
  </HeaderMain>
)

export default Header