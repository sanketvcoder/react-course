
import {ProductList,Product} from './Components/Products'
import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components';
import Toggle from './Components/toggle';
import Api from './Components/Api';
import Text from './Components/Text'
function App() {


  return (
    <App1>
      <GlobalStyle/>
      {/* <ProductList/>
      <Product/> */}
      {/* <Toggle/> */}

        {/* <Api/> */}
        <Text/>

    </App1>
  )
}

export default App

const App1 = styled.div`
width:90%;
margin:0 auto;
display: flex;
align-items: center;
flex-direction: column;
`
const GlobalStyle = createGlobalStyle`
  /* Reset some basic elements */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
  }`