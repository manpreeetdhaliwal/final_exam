import './App.css';
import {Component} from 'react';
import React from 'react';
import WelcomePage from './components/WelcomePage';
import AuctionIndexPage from './components/AuctionIndexPage';
 import AuctionShowPage from './components/AuctionShowPage';
 import Navbar from './components/Navbar';
 import SignInPage from './components/SignInPage';
 import SignUpPage from './components/SignUpPage';
 import { Session } from './requests';
 import AuctionNewPage from './components/AuctionNewPage';
 import AuthRoute from './components/AuthRoute';
 import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:null
     }
     this.handleSubmit=this.handleSubmit.bind(this)
     this.destroySession=this.destroySession.bind(this)
     this.handleSignUp=this.handleSignUp.bind(this)
  }

 //to get current user name on navbar
 componentDidMount() {
  Session.currentUser()
  .then(user=>{
    console.log('user', user);
    this.setState((state)=>{
      return {user:user}
    })
  })
}

//signin
handleSubmit(params){
  // params look like this : {email: 'js@winterfell.gov', password: 'supersecret'}
  Session.create(params).then(()=>{
    return Session.currentUser()}
    ).then(user=>{
      console.log('user', user);
      this.setState((state)=>{
        return {user:user}
      })
    })

}
//signout
destroySession(){
  Session.destroy()
  .then(res=>{
    this.setState(
        (
        state=>{return {user:null}}
        )
      )
    })
}
//signup user
handleSignUp(){
  Session.currentUser().then(user=>{
    this.setState((state)=>{
      return {user:user}
    })
  })

}


  render() {
  return (
    <div className="App">
    
     <BrowserRouter> 
     <Navbar currentUser={this.state.user} destroySession={this.destroySession}/>
     <Switch>
     <Route exact path='/auctions' component={AuctionIndexPage} />
     {/* <Route exact path='/auctions/new' component={AuctionNewPage} /> */}
     <AuthRoute exact path='/auctions/new' isAuth={this.state.user} component={AuctionNewPage}/>
     <Route path = '/welcome' component = {WelcomePage} />
     <Route exact path='/auctions/:id' component={AuctionShowPage} />
     {/* <Route path='/sign_in'component={SignInPage}></Route> */}
     <Route path='/sign_in' render={(routeProps)=><SignInPage handleSubmit={this.handleSubmit} {...routeProps}/>} />
     <Route path='/sign_up' render={(routeProps)=><SignUpPage handleSignUp={this.handleSignUp} {...routeProps}/>}/> 
     </Switch>
    </BrowserRouter>
    </div>
  );
}
}

export default App;
