import React, { Component } from 'react'
import './styles/App.css'
import Invoices from './pages/Invoices'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Customers from './pages/Customers/Customers'
import Menu from './components/Menu/Menu'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Container } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Menu />
          <Container className="d-flex flex-column flex-1">
            <Route exact path="/" component={Home}/>
            <Route path="/invoices" component={Invoices}/>
            <Route path="/products" component={Products}/>
            <Route path="/Customers" component={Customers}/>
          </Container>
        </div>
      </Router>
    )
  }
}

export default App
