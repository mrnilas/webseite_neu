import Card from "../components/contact-cards/cards";
import styles from "./contact.modules.css";

export default function Contact() {
  return (
    <>
      <main className="flex flex-col p-24">
        <h1 className="page-headline">Kontakt</h1>
        <p className="p">Du möchtest mich kontaktieren?</p>
        <p>Dann sind hier verschiedene Möglichkeiten für dich:</p>
        <div>Mail</div>
        <Card
          title={"Mail"}
          link={"mailto:kontakt@niklasjaeger.de"}
          icon="mail"
        ></Card>
        <Card
          title={"Instagram"}
          link={"https://www.instagram.com/mr_nilas/"}
          icon="instagram"
        ></Card>
        <div>Insta</div>
        <p>
          Natürlich bin ich auch offen für finanzielle Unterstützung für meine
          Projekte
        </p>
      </main>
    </>
  );
}
