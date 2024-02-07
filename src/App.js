// This project is to understand the class based project how it work and how to use it.
import './App.css';
import React, {useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {

  const pageSize=5;

  //environment varable create react app
  const apiKey = process.env.REACT_APP_NEWS_API
  
  const [progress, setProgress] = useState(0)
  /*setProgress=(progress)=>{
    this.setState({progress: progress})
  }*/

    return (
      <div>
        <Router>
         <NavBar/>
         <LoadingBar
           height={3}
           color='#f11946'
           progress={progress}
         />
        <Routes>
          <Route exact path="/General" element={ <News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={pageSize} country="in" category='General'/> }/>
          <Route exact path="/Business" element={ <News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={pageSize} country="in" category='Business'/> }/>
          <Route exact path="/Entertainment" element={ <News setProgress={setProgress} apiKey={apiKey} key="Enertainment" pageSize={pageSize} country="in" category='Entertainment'/> }/>
          <Route exact path="/Health" element={ <News setProgress={setProgress} apiKey={apiKey} key="Health" pageSize={pageSize} country="in" category='Health'/> }/>
          <Route exact path="/Science" element={ <News setProgress={setProgress} apiKey={apiKey} key="Science" pageSize={pageSize} country="in" category='Science'/> }/>
          <Route exact path="/Sports" element={ <News setProgress={setProgress} apiKey={apiKey} key="Sports" pageSize={pageSize} country="in" category='Sports'/> }/>
          <Route exact path="/Technology" element={ <News setProgress={setProgress} apiKey={apiKey} key="Technology" pageSize={pageSize} country="in" category='Technology'/> }/>
          </Routes>
        </Router>
      </div>
    )
}

export default App;