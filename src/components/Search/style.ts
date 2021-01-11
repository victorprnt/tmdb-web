import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 200px;

  position: absolute;
  z-index: 1;

  a {
    width: 100%;
    padding: 5px;
    border-top: 1px solid ${theme.colors.sinopse};

    background-color: ${theme.colors.placeholder};

    text-decoration: none;
    color: white;
  }
`;
