"use client"
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

const Profile = () => {

    const { data: session } = useSession();

    //const CartItems = session?.user.cart.map((item) => {
    const test = [/*{name: "test"}, {name: "test2"}*/]
    const CartItems = test.length === 0 ?  
    <Link 
        className="text-lg text-black max-w-fit"
        href="/store">
            Explore the Store
    </Link>
    : 
    test.map((item) =>{
        return <div key={item.name} className="">{item.name}</div>
    })

    return (
        <>
            <div className="flex">
                <Image
                    src={session?.user.image}
                    width={200}
                    height={200}
                    alt="Profile Picture"
                    className='object-contain rounded-full'
                />
                <div>
                    <h1 className="head_text">{session?.user.name}</h1>
                    <p className="desc">{session?.user.email}</p>
                </div>
            </div>

            <div className="border-2 border-gray-400 rounded-md w-4/5 h-48 my-5">
                <div className="mt-5 text-lg text-black max-w-fit sm:text-xl bg-white relative -top-9 ml-4 px-3 ">Your Cart</div>
                <div className="flex place-content-center">
                    {CartItems}
                </div>
                {test.length != 0 && 
                <button className="text-lg text-black bg-white max-w-fit relative bottom-0">
                    Buy Items
                </button>
            }</div>


            <div>Settings</div>
            <div className="border-2 border-slate-500 rounded-md w-4/5 py-5">
                <div>Personal</div>
            </div>
        </>
    )
}

export default Profile;