import React from 'react'
import { Link } from 'gatsby'
import NavBar from '../components/NavBar'

const SecondPage = () => (
  <NavBar>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </NavBar>
)

export default SecondPage
