import React from 'react'
import Header from '../src/header/Header'
import Body from '../src/body/Body'
import Checkout from '../src/CheckOut/Checkout'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
