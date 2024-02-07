// This project is to understand the class based project how it work and how to use it.
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=5

  //environment varable create react app
  apiKey = process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

render() {
    return (
      <div>
        <Router>
         <NavBar/>
         <LoadingBar
           height={3}
           color='#f11946'
           progress={this.state.progress}
         />
        <Routes>
          <Route exact path="/General" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="General" pageSize={this.pageSize} country="in" category='General'/> }/>
          <Route exact path="/Business" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="Business" pageSize={this.pageSize} country="in" category='Business'/> }/>
          <Route exact path="/Entertainment" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="Enertainment" pageSize={this.pageSize} country="in" category='Entertainment'/> }/>
          <Route exact path="/Health" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="Health" pageSize={this.pageSize} country="in" category='Health'/> }/>
          <Route exact path="/Science" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="Science" pageSize={this.pageSize} country="in" category='Science'/> }/>
          <Route exact path="/Sports" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="Sports" pageSize={this.pageSize} country="in" category='Sports'/> }/>
          <Route exact path="/Technology" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="Technology" pageSize={this.pageSize} country="in" category='Technology'/> }/>
          </Routes>
        </Router>
      </div>
    )
  }
}
