import './App.css';
import {Component} from 'react';
import React from 'react';
import WelcomePage from './components/WelcomePage';
import AuctionIndexPage from './components/AuctionIndexPage';
 import AuctionShowPage from './components/AuctionShowPage';
 import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
     }
  }
  render() {
  return (
    <div className="App">
    
     <BrowserRouter> 
     <Navbar></Navbar>
     <Switch>
     <Route exact path='/auctions' component={AuctionIndexPage} />
     <Route path = '/welcome' component = {WelcomePage} />
     <Route exact path='/auctions/:id' component={AuctionShowPage} />
     </Switch>
    </BrowserRouter>
    </div>
  );
}
}

export default App;
