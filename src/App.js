import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import React, { Component } from 'react'
import News from './Components/News';


export default class  extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News pageSize = {5} country = {'in'} category = {'general'}/>
        <Footer />
      </>
    )
  }
}
