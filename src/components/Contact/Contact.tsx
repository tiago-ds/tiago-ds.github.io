import "./contact.css";

import GithubIcon from "../../images/github-icon.png";
import LinkedinIcon from "../../images/linkedin-icon.png";
import MailIcon from "../../images/mail-icon.png";
import BaseCard from "../shared/BaseCard";

interface IContactIcon {
	icon: string;
	name: string;
	url: string;
}

const ContactIcon: React.FC<IContactIcon> = ({ icon, name, url }) => {
	return (
		<li>
			<a aria-current="page" href={url} target="_blank">
				<img className="contact-icon" src={icon} alt={`${name}-icon`} />
			</a>
		</li>
	);
};

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
		<BaseCard className="mt-5" title="Contact" mainCard>
			<ul className="contacts-container mt-5 d-flex flex-column flex-md-row gap-5 align-self-center pl-0">
				{contacts.map((contact) => (
					<ContactIcon
						icon={contact.icon}
						key={contact.name}
						name={contact.name}
						url={contact.url}
					/>
				))}
			</ul>
		</BaseCard>
	);
}
