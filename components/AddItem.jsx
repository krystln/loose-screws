"use client"

import { useState } from "react"

const AddItem = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            {count > 0 ?
                (<div className="flex flex-center text-left">
                    <button type='button'
                        onClick={() => setCount(prev => prev - 1)}
                        className='addItem_btn'>
                        -</button>
                    <p className="border-y px-4 py-0.5 border-black">{count}</p>
                    <button type='button'
                        onClick={() => setCount(prev => prev + 1)}
                        className='addItem_btn'>
                        +</button>
                </div>) : (<div className="flex-center">
                    <button type='button'
                        onClick={() => setCount(1)}
                        className="black_btn text-center"
                    >Add Item</button>
                </div>)
            }
        </>
    )
}

export default AddItem