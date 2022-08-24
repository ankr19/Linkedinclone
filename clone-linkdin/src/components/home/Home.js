import React from 'react'
import Feed from '../feeder/Feed'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container app_body my-1">
        <Sidebar />
        <Feed />
      </div>
    </div>
  )
}

export default Home
