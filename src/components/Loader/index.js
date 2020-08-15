import styled, { css } from 'styled-components';
import { shade } from 'polished';

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  animation: spin 2s linear infinite;

  margin: 40px auto;

  ${({ color, width, height }) =>
    css`
      border-color: ${color};
      border-top: 16px solid ${shade(0.5, color)};
      width: ${width || '100px'};
      height: ${height || '100px'};
    `}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
