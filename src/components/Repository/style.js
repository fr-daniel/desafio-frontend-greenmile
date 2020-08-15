import styled from 'styled-components';

export const RepositoryCard = styled.div`
  margin-top: 20px;

  > div {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;


    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 30px;

      flex: 1;

      strong {
        font-size: 20px;
        color: '#3D3D4D';
      }

      p {
        font-size: 18px;
        color: '#A8A8D3';
        margin-top: 4px;
      }
    }

    button {
      display: flex;
      align-items: center;
      padding: 10px;
      width: 50px;
      height: 50px;

      border: 0;
      border-radius: 50%;

      svg {
        margin-left: auto;
        color: '#CBCBD6';
      }
    }
  }
`;
