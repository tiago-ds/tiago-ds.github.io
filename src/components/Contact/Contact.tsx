import "./contact.css";

import BaseCard from "../shared/BaseCard";
import { type ContactType, contacts } from "../../data/contacts";

interface IContactIcon {
	contact: ContactType;
}

const ContactIcon: React.FC<IContactIcon> = ({ contact }) => {
	return (
		<li>
			<a aria-current="page" href={contact.url} target="_blank">
				<img
					className="contact-icon"
					src={contact.icon}
					alt={`${contact.name}-icon`}
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
					<ContactIcon contact={contact} />
				))}
			</ul>
		</BaseCard>
	);
}
