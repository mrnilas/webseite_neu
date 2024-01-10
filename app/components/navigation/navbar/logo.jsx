import Link from "next/link"
import { rubikBlack } from "@/app/fonts/fonts"
import localFont from "next/font/local";
import styles from './navbar.modules.css'

const Logo = () => {


    return (
        <>
            <Link href={'/'} className={ }>
                <h2 className={styles.rubik}>niklasjaeger.de</h2>
            </Link>
        </>
    )
}
export default Logo