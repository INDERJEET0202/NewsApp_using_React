import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import React, { useState } from 'react'
import News from './Components/News';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import LoadingBar from '@weblif/react-top-loading-bar'

const App = () => {

  const [progress, setProgress] = useState(0)

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const pageSize = 5;
    return (
      <>
        <Router>
         <Navbar />
          <LoadingBar
            height = {4}
            color='#39FF14'
            progress={progress}
          />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/" element={<News setProgress = {setProgress} apiKey = {apiKey} key = "general" pageSize = {pageSize} country = {'in'} category = {'general'}/>}/>
            <Route exact path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey} key = "business" pageSize = {pageSize} country = {'in'} category = {'business'}/>}/>
            <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey}  key = "entertainment" pageSize = {pageSize} country = {'in'} category = {'entertainment'}/>}/>
            <Route exact path="/general" element={<News setProgress = {setProgress} apiKey = {apiKey} key = "general" pageSize = {pageSize} country = {'in'} category = {'general'}/>}/>
            <Route exact path="/health" element={<News setProgress = {setProgress} apiKey = {apiKey} key = "health" pageSize = {pageSize} country = {'in'} category = {'health'}/>}/>
            <Route exact path="/science"element={<News setProgress = {setProgress} apiKey = {apiKey} key = "science"  pageSize = {pageSize} country = {'in'} category = {'science'}/>}/>
            <Route exact path="/sports"element={<News setProgress = {setProgress} apiKey = {apiKey} key = "sports" pageSize = {pageSize} country = {'in'} category = {'sports'}/>}/>
            <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey = {apiKey} key = "technology" pageSize = {pageSize} country = {'in'} category = {'technology'}/>}/>
          </Routes>
          <Footer />
        </Router>
      </>
    )

}

export default App;