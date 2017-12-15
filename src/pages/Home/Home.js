import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="Home text-white d-flex flex-column flex-1">
        <h1>Welcome to MOCK Invoice App</h1>
        <p>This is a work in progress, please find in the <Link to="/invoices" className="link">Invoices section</Link> a demonstration.</p>
        <p className="mt-4 d-flex ml-auto mt-auto">Created by <a href="https://github.com/miksansegundo/demio">Miguel San Segundo</a> for <a href="https://demio.com">Demio</a></p>
      </div>
    )
  }
}

export default Home
