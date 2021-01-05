import styled from 'styled-components';

export const Details = styled.div`
  display: flex;

  margin-top: 30px;
  padding: 0 20px;

  img {
    border-radius: 5px;
  }

  section {
    margin-left: 25px;
    margin-top: 10px;

    header {
      display: block;
      padding: 10px 0;
      margin: auto 0;

      strong {
        font-size: 28px;
        line-height: 38px;
        color: #3d3d4d;
      }

      svg {
        align-self: center;
        margin-left: 12px;
      }

      p {
        font-size: 21px;
        line-height: 26px;
        color: #a8a8b3;
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

      strong {
        display: block;
        margin-top: 40px;
        font-size: 21px;
        line-height: 24px;
      }

      p {
        margin-top: 25px;
        font-size: 16px;
        line-height: 21px;
      }
    }

    footer {
      margin-top: 35px;

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
