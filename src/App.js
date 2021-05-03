import React from 'react'
import Header from '../src/header/Header'
import Body from '../src/body/Body'
import Checkout from '../src/CheckOut/Checkout'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Login from '../src/Login/Login'
function App() {
  return (
    <Router>
      <div>
       {/* header part */} 
      <Header/>
        <Switch>
          {/* Home page route */}
          <Route exact path="/">
            {/* body part  */}
              <Body/>
          </Route>

          {/* CheckoutPage */}
          <Route path="/checkout">
              <Checkout/>
          </Route>

          {/* LogIn page  */}
          <Route path="/login">
              <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
