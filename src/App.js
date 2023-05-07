import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API;
  
  state = {progress : 10}
  setProgress = (progress) =>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <NavBar />
          <Routes>
            <Route exact path='/' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "home" pageSize={this.pageSize} country='in' category='general' sourceColor = 'danger' />}/>
            <Route exact path='/business' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "business" pageSize={this.pageSize} country='in' category='business' sourceColor = 'danger' />}/>
            <Route exact path='/entertainment' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "entertainment" pageSize={this.pageSize} country='in' category='entertainment' sourceColor = 'info' />}/>
            <Route exact path='/general' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "general" pageSize={this.pageSize} country='in' category='general' sourceColor = 'success' />}/>
            <Route exact path='/health' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "health" pageSize={this.pageSize} country='in' category='health' sourceColor = 'primary' />}/>
            <Route exact path='/science' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "science" pageSize={this.pageSize} country='in' category='science' sourceColor = 'warning' />}/>
            <Route exact path='/sports' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "sports" pageSize={this.pageSize} country='in' category='sports' sourceColor = 'danger' />}/>
            <Route exact path='/technology' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "technology" pageSize={this.pageSize} country='in' category='technology' sourceColor = 'secondary' />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

