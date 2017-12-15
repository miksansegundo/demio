import React from 'react'
import logo from './logo.png'

const Loading = ({items}) => (
  <div className="d-flex flex-column justify-content-center align-items-center flex-1 animated zoomIn bg-white rounded mb-5">
    <img src={logo} alt="Loading" className="animated infinite pulse" />
    <p className="mt-4">Please wait, we are loading data: {items.join(', ')}...</p>
  </div>
)

export default Loading
