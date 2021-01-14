import styled from 'styled-components';
import theme from '../../styles/theme';

export const Details = styled.div`
  display: flex;

  max-width: 1400px;
  margin-top: 30px;

  margin: 0 auto;
  margin-top: 40px;

  img {
    border-radius: 5px;
  }

  section {
    margin-left: 30px;
    margin-top: 10px;

    header {
      display: block;
      padding: 10px 0;
      margin: auto 0;

      strong {
        font-size: 28px;
        line-height: 38px;
        color: ${theme.colors.primary};
      }

      button {
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
        align-self: center;
        margin-left: 12px;
      }

      p {
        font-size: 21px;
        line-height: 26px;
        color: ${theme.colors.secondary};
      }
    }

    div {
      span {
        background-color: #e9c46a;
        padding: 4px;
        border-radius: 4px;

        & + span {
          margin-left: 8px;
        }
      }

      #tagline {
        margin-top: 40px;
        font-size: 18px;
        line-height: 21px;

        color: ${theme.colors.tagline};
      }

      #sinopse {
        margin-top: 25px;
        font-size: 19px;
        line-height: 22px;

        color: ${theme.colors.sinopse};
      }
    }

    footer {
      margin-top: 35px;

      /* Movie Genre */
      span {
        background-color: #e76f51;
        padding: 4px;
        border-radius: 4px;

        & + span {
          margin-left: 8px;
        }
      }

      ul {
        display: flex;
        list-style: none;
        margin-top: 25px;

        li {
          display: block;

          & + li {
            margin-left: 20px;
          }
        }
      }

      div {
        display: flex;
        margin-top: 25px;

        a {
          text-decoration: none;
          color: #2a9d8f;

          transition: color 0.2s ease;

          &:hover {
            color: #264653;
          }

          & + a {
            margin-left: 20px;
          }
        }
      }
    }
  }
`;
