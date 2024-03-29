"use client"

import { useState } from "react"
import Image from "next/image";

const AddPorduct = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        discount: 0,
        tag: [],
        image: "",
        width: 0,
        height: 0,
        depth: 0,
        color: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setProduct(prevProduct => {
            return {
                ...prevProduct,
                [name]: value
            }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch('/api/product', {
                method: 'POST',
                body: JSON.stringify({
                    product
                })
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Product Name"
                onChange={handleChange}
                value={product.name}
                className="border-slate-400 border-2 rounded-md"
            />
            <input
                type="text"
                name="price"
                placeholder="Product Price"
                onChange={handleChange}
                value={product.price}
                className="border-slate-400 border-2 rounded-md"
            />
            <input
                type="text"
                name="discount"
                placeholder="Product Discount"
                onChange={handleChange}
                value={product.name}
                className="border-slate-400 border-2 rounded-md"
            />
            <input
                type="text"
                name="height"
                placeholder="Product Height"
                onChange={handleChange}
                value={product.name}
                className="border-slate-400 border-2 rounded-md"
            />
            <input
                type="text"
                name="width"
                placeholder="Product Width"
                onChange={handleChange}
                value={product.name}
                className="border-slate-400 border-2 rounded-md"
            />
            <input
                type="text"
                name="depth"
                placeholder="Product Depth"
                onChange={handleChange}
                value={product.name}
                className="border-slate-400 border-2 rounded-md"
            />
            <input
                type="text"
                name="color"
                placeholder="Product Color"
                onChange={handleChange}
                value={product.name}
                className="border-slate-400 border-2 rounded-md"
            />
            <input
                type="text"
                name="tag"placeholder="Product Tag"
                onChange={handleChange}
                value={product.name}
                className="border-slate-400 border-2 rounded-md"
            />

            {selectedImage && (
                <div>
                    <Image
                        alt="not found"
                        width={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}

            <br />
            <br />

            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />

            <input type="submit" value="Submit"/>

        </form>
    )
}

export default AddPorduct;

