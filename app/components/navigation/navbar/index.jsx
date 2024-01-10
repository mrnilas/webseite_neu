'use client'

import React from "react"
import Link from "next/link"
import styles from './navbar.modules.css'
import Logo from "./logo"
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pathname = usePathname()

    return (
        <>
            <div className="w-full sticky top-0 h-20 topbar-class">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Logo />
                        <ul className="hidden md:flex gap-x-6">
                            <li>
                                <Link
                                    className={`link ${pathname === '/projekte' ? 'active' : ''}`}
                                    href="/projekte">
                                    PROJEKTE
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`link ${pathname === '/blog' ? 'active' : ''}`}
                                    href="/blog">
                                    BLOG
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`link ${pathname === '/contact' ? 'active' : ''}`}
                                    href="/contact">
                                    KONTAKT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar