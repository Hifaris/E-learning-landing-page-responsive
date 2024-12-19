import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { animate, motion } from 'framer-motion'

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        path: "/"
    },
    {
        id: 2,
        title: "Services",
        link: "#",
    },
    {
        id: 3,
        title: "About Us",
        link: "#",
    },
    {
        id: 4,
        title: "Our Team",
        link: "#",
    },
    {
        id: 5,
        title: "Contact Us",
        link: "#",
    }
]
function Navbar() {
    return (
        <div className='relative z-20'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className='container py-10 flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-2xl'>The Coding Journey</h1>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex gap-3 items-center'>
                        {
                            NavbarMenu.map((menu) => (
                                <li>
                                    <a href={menu.path} key={menu.id} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                                        <div className='w-2 h-2 bg-secondary absolute mr-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden rounded-full'></div>
                                        {menu.title}</a>
                                </li>
                            ))
                        }
                        <button className='primary-btn'>Sign In</button>
                    </ul>

                </div>
                {/* Mobile section */}
                <div className='lg:hidden'>
                    <IoMdMenu className='text-4xl' />
                </div>
            </motion.div>

        </div>
    )
}

export default Navbar