import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      alert(`Logged in as ${result.user.email}`);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <input type="email" placeholder="Email" className="form-control mb-2"
             onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="form-control mb-2"
             onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary" onClick={login}>Login</button>
    </div>
  );
};

export default Login;
