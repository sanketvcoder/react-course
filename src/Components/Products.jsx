import React from 'react'
import styled from 'styled-components'

const dummyData = ['Product1','Product2','Product3','Product4','Product5','Product6','Product7']
const ProductList = () => {
    return (
        <div>
            <h3>Ecommerce Project</h3>
        </div>
    )
}

const Product = ()=>{
    return(
    dummyData.map((items,index)=>(
            <h1 key = {index}>{items}</h1>
        
    )))
}
export { ProductList, dummyData,Product } 
