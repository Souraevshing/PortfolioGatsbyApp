import React from "react"
import { Link } from "gatsby"

import Layout from "./components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Development & Production</h3>
          <div className={styles.profile}>Full Stack MERN Developer </div>
          <Link className={styles.btn} to="/projects">
            Projects
          </Link>
        </div>
        <img src="/main-logo.jpg" alt="logo" />
      </section>
    </Layout>
  )
}
