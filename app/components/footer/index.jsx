"use client"

import styles from './footer.modules.css'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
    return (
        <footer>
            <div>
                <Link href={"/"}>Impressum</Link>
                <Link href={"/"}>Datenschutz</Link>
            </div>
            <div className='copyright'>
                <Image
                    src="/icon/copyright-regular.svg"
                    alt="Vercel Logo"

                    width={24}
                    height={24}

                />
                niklasjaeger.de
            </div>

            <div>
                <Link href={"/"}>Linkliste</Link>
            </div>
        </footer>
    )
}

export default Footer