import React, { useState } from 'react';
import { useAuth } from '../../provider/auth'
import { Container } from './styles';

function Sign() {
    const { state, dispatch } = useAuth()
    const [userRegister, setUserRegister] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSignUp = (evt) => {
        evt.preventDefault();
        const { password, confirmPassword } = userRegister
        if(password !== confirmPassword) return;

        console.log(userRegister);
        dispatch({user: {
            name: userRegister.name,
            email: userRegister.email,
            password: userRegister.password
        }});
        console.log(state)
    }

  return(
      <Container>
          <form className="signIn" onSubmit={handleSignUp}>
            <fieldset>
                <legend>Sign Up</legend>
                <p>
                    <input placeholder="Name" type="text"  name="name" id="name" value={userRegister.name} onChange={e => setUserRegister({...userRegister, name: e.target.value})}/>
                </p>
                <p>
                    <input placeholder="Email" type="email"  email="email" id="email" value={userRegister.email} onChange={e => setUserRegister({...userRegister, email: e.target.value})}/>
                </p>
                <p>
                    <input placeholder="Password" type="password"  password="password" id="password" value={userRegister.password} onChange={e => setUserRegister({...userRegister, password: e.target.value})}/>
                </p>
                <p>
                    <input placeholder="Confirm Password" type="password"  password="confirmPassword" id="confirmPassword" value={userRegister.confirmPassword} onChange={e => setUserRegister({...userRegister, confirmPassword: e.target.value})}/>
                </p>
            </fieldset>
            <button type="submit">Sign Up</button>
          </form>
      </Container>
  );
}

export default Sign