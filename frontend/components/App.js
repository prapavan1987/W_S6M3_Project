import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ImageDisplay from './ImageDisplay';
import Header from './Header';
import Date from './Date';

function App() {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then( (res) => {
      console.log(res.data)
      setApodData(res.data)
      setLoading(false)
    })
    .catch( (err) => {
      console.log(err.message)
      setError("Failed to fetch data. Please try again later!")
      setLoading(false)
    })
  }, [])


  if (loading) {
    return <h3>Loading...</h3>
  }

  if (error) {
    return <h3>{error}</h3>
  }

  return (
    <div className='app'>
      <Header />
      <ImageDisplay apodData={apodData}/>
      <Help />
    </div>
  )
}

export default App
