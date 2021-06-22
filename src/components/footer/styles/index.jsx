import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  flex-direction: space-between;
  align-items: center;
  color: #ffffff;
  background: #23272a;

  ul{
    list-style: none !important;
  }
  .row {
    display:flex;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .navegator {
    width:80%;
    .column {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .social-net {
    width:20%;

    h1 {
      font-size:50px;
    }
  }

`;