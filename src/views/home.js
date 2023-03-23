import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Markets Administrator</title>
        <meta property="og:title" content="Future Markets Administrator" />
      </Helmet>
    </div>
  )
}

export default Home
