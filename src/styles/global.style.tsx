import { createGlobalStyle } from 'styled-components'

const GblStyle = createGlobalStyle`
  body {
    background: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};
  }

  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export {
  GblStyle as GlobalStyle
}