import React from 'react'
import { ButtonComponent } from './Components/Button'
import styled from 'styled-components'


const ProductItems = ({items,key}) => {
  return (
    <ProductItem>
      <h3 key = {key}>{items}</h3>
      <ButtonComponent/>
    </ProductItem>
  )
}

export default ProductItems

const ProductItem = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`
