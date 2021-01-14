import styled from 'styled-components';

import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 1400px;

  margin: 40px auto;

  @media (max-width: ${theme.screenSize.FourK}) {
    max-width: 1700px;
  }

  @media (max-width: ${theme.screenSize.fullHD}) {
    max-width: 1200px;
  }

  @media (max-width: ${theme.screenSize.desktop}) {
    max-width: 980px;
  }

  @media (max-width: ${theme.screenSize.laptop}) {
    max-width: 980px;
  }

  @media (max-width: ${theme.screenSize.mobileL}) {
    margin-top: 150px;
  }
`;
