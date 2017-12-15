import React, {Component} from 'react'
import http from './http'
import Loading from '../components/Loading/Loading'
import { connect } from 'react-redux'
import * as actions from '../redux/data.actions'

// HOC to fetch data from the several API endpoints and pass it down
const withData = (WrappedComponent, endpoints) => {
  const Container = class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        loading: true
      }
    }
    async componentDidMount() {
      // GET Request to each endpoint in the list
      const data = await http.all(
        endpoints.map(http.get)
      ).then(this.spreadData).then(this.simulateSlowRequest(2500))
      this.setState({ loading: false })
      this.props.updateDataAction(data)
    }
    // Wait for all request to be done
    spreadData = http.spread((...responses) => responses.reduce(this.reduceData, {}))
    // Create a data key with the endpoint name
    reduceData = (acc, response, index) => {
      acc[endpoints[index]] = response.data
      return acc
    }
    simulateSlowRequest = time => (data) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(data), time)
      })
    }
    render() {
      const {loading} = this.state
      if (loading) return <Loading items={endpoints} />
      return <WrappedComponent />
    }
  }
  Container.displayName = `withData(${WrappedComponent.displayName || WrappedComponent.name})`
  return  connect(null, actions)(Container)
}


export default withData
