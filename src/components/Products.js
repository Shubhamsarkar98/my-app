import React,{useEffect, useState} from 'react'
import { add } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
const Products = () => {
    const dispatch=useDispatch()
    const [products, setproducts] = useState([])
    useEffect(()=>{
       const fetchProducts=async()=>{
        const res=await fetch('https://fakestoreapi.com/products')
        const data=await res.json();
        setproducts(data)
        console.log(data)
       }
       fetchProducts()
    },[])
    const handleadd=(pro)=>{
        dispatch(add(pro))
    }
  return (
    <div className='productsWrapper'>
        {
            products.map((product)=>(
                <div className='card' key={product.id}>
                    <img src={product.image} alt=""/>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn' onClick={()=>handleadd(product)}>Add to Cart</button>
                </div>
            ))
        }

    </div>
  )
}

export default Products