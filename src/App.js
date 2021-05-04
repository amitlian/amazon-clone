import React,{useEffect} from 'react'
import Header from '../src/header/Header'
import Body from '../src/body/Body'
import Checkout from '../src/CheckOut/Checkout'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Login from '../src/Login/Login'
import {auth} from '../src/firebase'
import {useStateValue} from '../src/StateProvider';
import Payment from '../src/Payment/Payment'
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log('User Auth===>',authUser);

      if(authUser){
        //the user just logged In or the user was logged In
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })

  },[])
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

          {/* Payment page  */}
          <Route path="/payment">
              <Payment/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
