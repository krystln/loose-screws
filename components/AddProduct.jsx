"use client"

import { useState } from "react"

const AddPorduct = () => {

    const [product, setProduct] = useState({
        name: "",
        price: "",
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setProduct(prevProduct => {
            return {
                ...prevProduct,
                [name]: value
            }
        })
    }

  return (
    <form>
        <input 
            type="text"
            name="name"
            onChange={handleChange} 
            value={product.name}
            className="border-slate-400 border-2 rounded-md"
        />
        <input 
            type="text"
            name="price" 
            onChange={handleChange} 
            value={product.price}    
            className="border-slate-400 border-2 rounded-md"
        />
    </form>
  )
}

export default AddPorduct