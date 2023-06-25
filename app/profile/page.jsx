"use client"
import Image from "next/image";
import { useSession } from "next-auth/react";

const Profile = () => {

    const { data: session } = useSession();

  return (
    <>
    <div className="flex">
        <Image
            src={session?.user.image}
            width={200}
            height={200}
            className='object-contain rounded-full'
            />
        <div>
        <h1 className="head_text">{session?.user.name}</h1>
        <p className="desc">{session?.user.email}</p>
        </div>
    </div>

    <div className="border-2 border-gray-400 rounded-md w-4/5 h-52">
        <div className="mt-5 text-lg text-black max-w-fit sm:text-xl bg-white relative -top-9 ml-4 px-3  ">Your Cart</div>
    </div>
            </>
  )
}

export default Profile;