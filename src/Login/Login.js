import React,{useState} from 'react'
import '../Login/Login.css'
import {auth} from '../firebase'
import {useHistory} from 'react-router-dom'


function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e)=>{
        e.preventDefault();
        //fireBase signup part Stuff Happend here
        const UserSignIn = async()=>{
            try {
                const AuthUser = await auth.signInWithEmailAndPassword(email,password)
                if(AuthUser){
                    window.alert("Sign In Successfully")
                    history.push('/')
                }
                
            } catch (error) {
                console.log(error)
            }
        }
        UserSignIn();
    }

    const register = e=>{
        e.preventDefault();
        //fireBase register Stuff Happend here
        const regUser = async()=>{
            try {
                const RegUsers = await auth.createUserWithEmailAndPassword(email,password)
                if(RegUsers){
                    console.log(RegUsers)
                    window.alert("Registration Successfully")
                    history.push('/')
                }
                
            } catch (error) {
                console.log(error)
            }
        }
        regUser();

    }


    return (
        <div className="loginPage">
            <form className="login_form">
                <h1>Sign In</h1>
                <p>E-mail</p>
                <input className="login_input" type="text"
                value={email}
                onChange={e=> setEmail(e.target.value)}
                ></input>
                <p>Password</p>
                <input className="login_input" type="password"
                value={password}
                onChange={e=> setPassword(e.target.value)}
                ></input><br/>
                <button type="submit" onClick={signIn}  className="login_button">Sign In</button>
                <p className="login_para">By continuing, you agree to Amazon's<a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a></p>
                <button  onClick={register} className="Create_button">Create your Amazon Account</button>
            </form>
            
        </div>
    )
}

export default Login
