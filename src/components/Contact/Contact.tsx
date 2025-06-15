import "./contact.css";

import ContactIcon from "./ContactIcon";
import GithubIcon from "../../images/github-icon.png";
import LinkedinIcon from "../../images/linkedin-icon.png";
import MailIcon from "../../images/mail-icon.png";

interface Contact {
  icon: string;
  name: string;
  url: string;
}

export default function Contact() {
  const contacts: Array<Contact> = [
    {
      icon: GithubIcon,
      name: "Github",
      url: "https://github.com/tiago-ds",
    },
    {
      icon: LinkedinIcon,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tiago-campelo/",
    },
    {
      icon: MailIcon,
      name: "Email",
      url: "mailto:tiiagoscs@gmail.com",
    },
  ];

  return (
    <div className="main-section m-5 d-flex flex-column align-items-center">
      <h2 className="title-text">Contact</h2>
      <ul className="contacts-container mt-5 d-flex flex-row gap-5 align-self-center">
        {contacts.map((contact) => (
          <ContactIcon
            icon={contact.icon}
            key={contact.name}
            name={contact.name}
            url={contact.url}
          />
        ))}
      </ul>
    </div>
  );
}
