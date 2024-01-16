import Link from "next/link";
import styles from "./card.modules.css";
import SVGInstagram from "../icons/instagram";
import SVGEnvelope from "../icons/envelope";
import SVGPaypal from "../icons/paypal";

export default function Card({ title, link, icon }) {
  function renderIcon(icon) {
    switch (icon) {
      case "instagram":
        return <SVGInstagram className="icon" />;

        break;

      case "mail":
        return <SVGEnvelope className="icon" />;

      case "paypal":
        return <SVGPaypal className="icon" />;

      default:
        break;
    }
  }

  return (
    <>
      <Link href={link} className="card-link">
        <div className="card">
          {renderIcon(icon)}
          <h3>{title}</h3>
        </div>
      </Link>
    </>
  );
}
