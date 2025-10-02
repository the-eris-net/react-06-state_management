import { useState, useEffect } from 'react';
import styled from 'styled-components';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;


function Nav(){

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    console.dir(e.target.elements);
    console.log({ username, password });
  }

  return <nav>
    <LoginForm onSubmit={handleSubmit}>
      <input name="username" type="text" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </LoginForm>
  </nav>
}

function Main(){
  return <main>

  </main>
}

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  )
}

export default App;
