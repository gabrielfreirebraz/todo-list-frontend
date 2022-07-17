// import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import { Container, FormLogin, LeftLogo } from './styles';

export default function Login() {
  return (
    <Container>
      <LeftLogo>
        <img src="./logo-bolttech.png" alt="" />
        {/* <div id="logo"></div> */}
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
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </FormLogin>
    </Container>
  );
}
