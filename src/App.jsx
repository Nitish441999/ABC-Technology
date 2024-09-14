import React, { useEffect, useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import Loading from './Component/Loder/Loading';
import './Font.css'
import Head from './Component/Head/Head';

function App() {
  
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setLoading(false), 1000);
    }, []);
  
    if (loading) {
      return <Loading/>;
    }
  return (
    <div>
      <Head/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App