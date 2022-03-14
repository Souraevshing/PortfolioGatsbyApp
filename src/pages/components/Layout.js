import React from "react"
import { Link } from "gatsby"

import Navbar from "./Navbar"
import "../../styles/global.css"

const Layout = ({ children }) => {
  let date = new Date().getFullYear()
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>
          Copyright {date}{" "}
          <Link to="/">
            <span className="footer-title">Max Develop</span>
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default Layout
