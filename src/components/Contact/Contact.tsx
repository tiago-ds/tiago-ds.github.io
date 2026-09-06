import BaseCard from "../shared/BaseCard";
import { type ContactType, contacts } from "../../data/contacts";

interface IContactIcon {
	contact: ContactType;
}

const ContactIcon: React.FC<IContactIcon> = ({ contact }) => {
	return (
		<li>
			<a
				href={contact.url}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex"
			>
				<img
					className="h-[85px] w-[85px]"
					src={contact.icon}
					alt={contact.name}
				/>
			</a>
		</li>
	);
};

export default function Contact() {
	return (
		<BaseCard className="mt-4 w-fit! md:mt-12" title="Contact" mainCard>
			<ul className="mt-12 flex list-none flex-col gap-12 self-center pl-0 md:flex-row">
				{contacts.map((contact) => (
					<ContactIcon key={contact.name} contact={contact} />
				))}
			</ul>
		</BaseCard>
	);
}
