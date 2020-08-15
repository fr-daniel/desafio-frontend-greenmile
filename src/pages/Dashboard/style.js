import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  max-width: 700px;
`;

export const Title = styled.h1`
  font-size: 38px;
  color: #3A3A3A;
  line-height: 56px;

  margin-top: 40px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0  24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;
    border: 2px solid #fff;
    border-right: 0;

    ${({ hasError }) =>
    hasError &&
    css`
      border-color: #c53030;
    `}

    &::placeholder {
      color: #A8A8B3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #5c6bc0;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    font-weight: bold;

    &:hover {
      background: ${shade(0.2, '#5c6bc0')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #C53030;
  margin-top: 8px;
`;

export const UserInfo = styled.div`
  margin-top: 80px;
  max-width: 700px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px 10px 0 0;

  display: flex;
  align-items: center;

  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin-right: 40px;
  }

  div {
    flex:1;

    strong {
      display: flex;
      align-items: center;
      font-size: 20px;
      color: #3D3D4D;

      span {
        font-size: 15px;
        color: #A8A8D3;
        font-weight: normal;
        margin-left: 5px;
      }
    }

    p {
      font-size: 18px;
      color: #A8A8D3;
      margin-top: 5px;
    }

    a {
      display: block;

      text-decoration: none;
      margin-top: 15px;
    }
  }
`;

