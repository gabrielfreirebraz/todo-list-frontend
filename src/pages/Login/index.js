// import { useParams } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, FormLogin, LeftLogo } from './styles';
// import api from 'services/api';
import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://bolttech-todo.herokuapp.com',
//   headers: {
//      '': ""
//  }
// });

export default function Login() {
  const [getInputEmail, setInputEmail] = useState('');
  const [getInputPassword, setInputPassword] = useState('');

  async function makeRequest(e) {
    // e.PreventDefault();

    if (getInputEmail === '' || getInputPassword === '') {
      alert("The values can't be empty");
      return false;
    } else {
      return false;
    }

    try {
      // const response = await axios.post(
      //   'https://bolttech-todo.herokuapp.com/auth/signin',
      //   {
      //     email: getInputEmail,
      //     password: getInputPassword,
      //   }
      // );
      const response = await axios({
        method: 'post',
        url: 'https://bolttech-todo.herokuapp.com/auth/signin',
        data: {
          email: getInputEmail,
          password: getInputPassword,
        },
      });

      console.log(response);
      console.log(getInputEmail, getInputPassword);
    } catch (error) {
      alert('Error: ' + error.response);

      // setInputEmail('');
      // setInputPassword('');
    }
    return false;
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
