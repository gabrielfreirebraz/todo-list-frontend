// import { useParams } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, FormLogin, LeftLogo } from './styles';

export default function Login() {
  const [getInputEmail, setInputEmail] = useState('');
  const [getInputPassword, setInputPassword] = useState('');

  function makeRequest() {
    if (getInputEmail === '' || getInputPassword === '')
      alert("The values can't be empty");
  }

  return (
    <Container>
      <LeftLogo>
        <img src="./logo-bolttech.png" alt="" />
      </LeftLogo>

      <FormLogin>
        <form>
          <h3>Sign In</h3>

          <br />
          <div className="mb-3">
            <input
              placeholder="E-mail"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setInputEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setInputPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-dark" onClick={makeRequest}>
            Submit
          </button>
        </form>
      </FormLogin>
    </Container>
  );
}
