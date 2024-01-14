"use client"

import styles from './footer.modules.css'
import Link from 'next/link'
import Image from 'next/image'

import SvgCopyright from '../icons/copyright'
import SVGLinkedIn from '../icons/linkedin'
import SVGGitHub from '../icons/github'
import SVGCodePen from '../icons/codepen'
import SVGLink from '../icons/link'


const Footer = () => {
    return (
        <footer>

            <div className='footer-elements'>
                <SvgCopyright
                    className="icons m-r-8"
                />
                niklasjaeger.de
            </div>
            <div>
                <Link href={"/"} className='link'>Impressum</Link>
            </div>
            <div className='link-list footer-elements'>
                <Link href={"https://www.linkedin.com/in/niklas-j%C3%A4ger-204575219/"} className='m-r-8'>
                    <SVGLinkedIn className="icons" />
                </Link>

                <Link href={"/"} className='m-r-8'>
                    <SVGGitHub className="icons" />
                </Link>

                <Link href={"/"} className="m-r-8">
                    <SVGCodePen className="icons" />
                </Link>
                <Link href={"/"}>
                    <SVGLink className="icons" />
                </Link>


            </div>
        </footer>
    )
}

export default Footer