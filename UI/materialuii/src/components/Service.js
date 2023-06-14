import React from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'

function Service() {

    const products = useSelector(state => state.products)
    const [count,setCount] = useState(0)
    const [data,setData] = useState([])
    // const service = {
    //     getData : () => {
    //         return new Promise((resolve, reject) => {
    //             resolve({
    //                 count : products.length,
    //                 data : products
    //             })
    //         });
    //     }
    // }

  return (
    <>
    {   setCount(products.length) }
    {    setData(products)  } 
    </>
  )
}

export default Service