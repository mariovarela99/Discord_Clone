import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 8px 15px;

  > a {
    color: #ffffff;
    font-size: sans-serif;
    font-size: 18px;
    font-weight: 700;
  }

  > a.abrir{
    border-radius: 40px;
    font-size: 14px;
    padding: 12px 10px;
    font-size: 15px;
    font-weight: 500;
    background: #ffffff;
    color: #233232;
    transition: all 0.3s;

    :hover{
      box-shadow: 3px 3px 10px #233232;
      color: #484eed;
    }
  }

  nav{
    display: flex;

    ul{
      display: flex;

      li{
        display: flex;

        a{
          font-size: 16px;
          padding: 10px;
          margin: 10px;
          color: #ffffff;
          font-weight: 600;

          :hover{
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
