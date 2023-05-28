"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'


const Nav = () => {
    const isUserLoggedIn = true;

    const [dropDownMenu, setDropDownMenu] = useState(false);

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href="/" className='flex gap-2 flex-center'>
                <Image
                    src="/images/logo.svg"
                    alt="logo"
                    width={30}
                    height={30}
                    className='object-contain'
                />
                <p className='logo_text'>LooseScrews</p>
            </Link>


            {/* Desktop */}
            <div className='sm:flex hidden'>
                {isUserLoggedIn ?
                    (<div className='flex gap-3 md:gap-5'>
                        <Link href='/cart' className="black_btn">
                            Cart
                        </Link>
                        <button type='button' className='outline_btn'>
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image src="/images/profile.svg"
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
                        >
                            Sign In
                        </button>
                    </div>
                    )
                }
            </div>


            {/*Mobile*/}
            <div className='sm:hidden flex relative'>
                {isUserLoggedIn ? 
                (   <div className='flex gap-3 md:gap-5'>
                        <Image
                            src="/images/profile.svg"
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
                                    onClick={() => setDropDownMenu(false)}
                                >Sign Out</button>
                            </div>
                        )}
                    </div>
                ):(
                    <></>
                )}

            </div>

        </nav>
    )
}

export default Nav