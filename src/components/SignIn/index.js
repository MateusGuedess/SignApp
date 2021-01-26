import React, { useState } from 'react';
import { useAuth } from '../../provider/auth'
import { Container } from './styles';
import { Link } from 'react-router-dom'

function SignIn() {
    const { state, dispatch } = useAuth()
    const [userRegister, setUserRegister] = useState({
        email: "",
        password: "",
    })

    const handleSignUp = (evt) => {
        evt.preventDefault();
        const { password, confirmPassword } = userRegister
        if(password !== confirmPassword) return;

        console.log(userRegister);
        dispatch({user: {
            email: userRegister.email,
            password: userRegister.password
        }});
        console.log(state)
    }

  return(
      <Container>
          <form className="signIn" onSubmit={handleSignUp}>
            <fieldset>
                <legend>Sign In</legend>
                <p>
                    <input placeholder="Email" type="email"  email="email" id="email" value={userRegister.email} onChange={e => setUserRegister({...userRegister, email: e.target.value})}/>
                </p>
                <p>
                    <input placeholder="Password" type="password"  password="password" id="password" value={userRegister.password} onChange={e => setUserRegister({...userRegister, password: e.target.value})}/>
                </p>
            </fieldset>
            <button type="submit">Sign In</button>
            <Link to="/signin">Not a member? Sign Up</Link>
          </form>
      </Container>
  );
}

export default SignIn