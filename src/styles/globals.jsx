import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html{
    margin: 0;
    padding: 0;
    background-color: #484eed;
    color: #ffffff;
  }

  a{
    text-decoration: none;
  }

  body{
    background-color: #484eed;
  }

*{
   box-sizing: border-box;
}
`

export default GlobalStyle