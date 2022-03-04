import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  state={
    themecolor:"green"
}
handleState=(color)=>{
  this.setState({themecolor:color})
}
  render() {
    let pageSize = 12;
    return (
      <>
        <Navbar handleState={this.handleState}/>
        <Routes>
          <Route path="/" element={<News pageSize={pageSize} themecolor={this.state.themecolor} country="in" category="general"/>}></Route>
          <Route path="/business" element={<News pageSize={pageSize} themecolor={this.state.themecolor} country="in" category="business"  />}></Route>
          <Route path="/entertainment" element={<News pageSize={pageSize} themecolor={this.state.themecolor} country="in" category="entertainment"  />}></Route>
          <Route path="/general" element={<News pageSize={pageSize} themecolor={this.state.themecolor} country="in" category="general"  />}></Route>
          <Route path="/health" element={<News pageSize={pageSize} themecolor={this.state.themecolor} country="in" category="health"  />}></Route>
          <Route path="/science" element={<News pageSize={pageSize} themecolor={this.state.themecolor} country="in" category="science"  />}></Route>
          <Route path="/sports" element={<News pageSize={pageSize} themecolor={this.state.themecolor} country="in" category="sports"  />}></Route>
          <Route path="/technology" element={<News pageSize={pageSize} themecolor={this.state.themecolor} country="in" category="technology"  />}></Route>
          
        </Routes>
      </>
    )
  }
}




