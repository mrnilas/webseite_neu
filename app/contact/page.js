import Card from "../components/contact-cards/cards";
import styles from "./contact.modules.css";

export default function Contact() {
  return (
    <>
      <main className="flex flex-col">
        <div className="content-wrapper">
          <h1 className="page-headline">Kontakt</h1>
          <p className="p first-text">Du möchtest mich kontaktieren?</p>
          <p className="p center-text">
            Dann sind hier verschiedene Möglichkeiten für dich:
          </p>

          <div className="card-banner">
            <Card
              title={"Mail"}
              link={"mailto:kontakt@niklasjaeger.de"}
              icon="mail"
            />
            <Card
              title={"Instagram"}
              link={"https://www.instagram.com/mr_nilas/"}
              icon="instagram"
            />
            <Card
              title={"PayPal"}
              link={"https://www.paypal.me/Niklas934"}
              icon="paypal"
            />
          </div>

          <p className="p center-text">
            Natürlich bin ich auch offen für finanzielle Unterstützung meiner
            Projekte!
          </p>
        </div>
      </main>
    </>
  );
}
