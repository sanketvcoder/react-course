import React from 'react'
import styled from 'styled-components'
import { ButtonComponent } from './Button'
import ProductItems from '../ProductItems'

const dummyData = ['Product1','Product2','Product3']
const ProductList = () => {
    return (
        <Heading>
            <h3>Ecommerce Project</h3>
        </Heading>
    )
}

const Product = ()=>{
    const flag = true;
    return(
        <div>
            {
                flag ? <h4>This are the Items</h4>:null
            }

            {dummyData?.map((items,index)=>(
                <ProductItems items = {items} key = {index}/>))}
        </div>
    )
}


export { ProductList, dummyData,Product } 

const Heading = styled.div`
font-size:60px
`