import "./contact.css";

import BaseCard from "../shared/BaseCard";
import { type ContactType, contacts } from "../../data/contacts";

interface IContactIcon {
	contact: ContactType;
}

const ContactIcon: React.FC<IContactIcon> = ({ contact }) => {
	return (
		<li>
			<a href={contact.url} target="_blank" rel="noopener noreferrer">
				<img
					className="contact-icon"
					src={contact.icon}
					alt={contact.name}
				/>
			</a>
		</li>
	);
};

export default function Contact() {
	return (
		<BaseCard className="mt-5 w-fit-content" title="Contact" mainCard>
			<ul className="contacts-container mt-5 d-flex flex-column flex-md-row gap-5 align-self-center pl-0">
				{contacts.map((contact) => (
					<ContactIcon key={contact.name} contact={contact} />
				))}
			</ul>
		</BaseCard>
	);
}
