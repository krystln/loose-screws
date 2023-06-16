"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {

    const { data: session, status } = useSession();
    const [providers, setProviders] = useState();
    const [dropDownMenu, setDropDownMenu] = useState(false);

    
    useEffect(() => {
        const getProvidersData = async () => {
            const providers = await getProviders();
            // console.log(providers);
            setProviders(providers);
        }
        getProvidersData();
    },[]);

    return (
        <nav className='flex-between w-full mb-16 pt-3 border-b border-slate-150 pb-3'>
            <Link href="/" className='flex gap-2 flex-center'>
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={30}
                    height={30}
                    className='object-contain'
                />
                <p className='logo_text'>LooseScrews</p>
            </Link>

            {/* Desktop */}
            <div className='sm:flex hidden'>
                {status === "authenticated" ?
                    (<div className='flex gap-3 md:gap-5'>
                        <Link href='/cart' className="black_btn">
                            Cart
                        </Link>
                        <button 
                            type='button' 
                            className='outline_btn'
                            onClick={() => signOut({callbackUrl: 'http://localhost:3000'})}>
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image src={session?.user.image}
                                alt="profile_pic"
                                width={37}
                                height={37}
                                className='object-contain rounded-full'
                            ></Image>
                        </Link>
                    </div>
                    ) : (
                    <div>
                        <button
                            type="button"
                            className='black_btn'
                            onClick={() => signIn()}
                        >
                            Sign In
                        </button>
                    </div>
                    )
                }
            </div>


            {/*Mobile*/}
            <div className='sm:hidden flex relative'>
                {session?.user ? 
                (   <div className='flex gap-3 md:gap-5'>
                        <Image
                            src={session?.user.image}
                            alt="profile_pic"
                            width={37}
                            height={37}
                            className='object-contain rounded-full'
                            onClick={() => setDropDownMenu(prev => !prev)}
                        />
                        {dropDownMenu && (
                            <div className='dropdown'>
                                <Link href='/cart' className="dropdown_link"
                                    onClick={() => setDropDownMenu(false)}>Cart</Link>
                                <Link href='/profile' className="dropdown_link"
                                    onClick={() => setDropDownMenu(false)}>Profile</Link>
                                <button
                                    type="button"
                                    className='mt-5 w-full black_btn'
                                    onClick={() => {
                                        setDropDownMenu(false);
                                        signOut({callbackUrl: 'http://localhost:3000'});
                                        }
                                    }
                                >Sign Out</button>
                            </div>
                        )}
                    </div>
                ):(
                    <><button onClick={() => signIn()}>Sign In</button></>
                )}

            </div>

        </nav>
    )
}

export default Nav