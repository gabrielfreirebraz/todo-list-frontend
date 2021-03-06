import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 100%;
  display: flex;
`;

export const LeftLogo = styled.div`
  background: #181050;
  width: 49%;
  height: 100%;
  text-align: center;
  padding-top: 350px;
  float: left;

  img {
    max-height: 200px;
  }
`;

export const FormLogin = styled.div`
  background: #fff;
  text-align: center;
  height: 100%;
  width: 49%;
  padding: 280px 300px 0;

  h3 {
    color: #181050;
  }
  button {
    padding: 10px 20px;
    background: #181050;
    width: 100%;
  }
  button:hover {
    background: #181050;
    opacity: 0.7;
  }
`;
