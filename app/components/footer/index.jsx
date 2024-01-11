"use client"

import styles from './footer.modules.css'
import Link from 'next/link'
import Image from 'next/image'

import SvgCopyright from '../icons/copyright'


const Footer = () => {
    return (
        <footer>

            <div className='copyright'>
                <SvgCopyright
                    className="icons"
                />
                niklasjaeger.de
            </div>
            <div>
                <Link href={"/"}>Impressum</Link>
            </div>
            <div>
                <Link href={"/"}>Linkliste</Link>
            </div>
        </footer>
    )
}

export default Footer