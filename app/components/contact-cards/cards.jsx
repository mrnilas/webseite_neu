import Link from "next/link"
import styles from "./card.modules.css"
import SVGInstagram from "../icons/instagram"
import SVGEnvelope from "../icons/envelope"

export default function Card({ title, link, icon }) {

    function renderIcon(icon) {
        switch (icon) {
            case "instagram": return <SVGInstagram className="icon" />

                break;

            case "mail": return <SVGEnvelope className="icon" />
            default:
                break;
        }
    }

    return (
        <>
            <Link href={link}>
                <div className="card">

                    <h3>
                        {title}
                    </h3>
                    {renderIcon(icon)}
                </div>
            </Link>


        </>
    )
}