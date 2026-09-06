import GithubIcon from "../assets/contact-icons/github-icon.png";
import LinkedinIcon from "../assets/contact-icons/linkedin-icon.png";
import MailIcon from "../assets/contact-icons/mail-icon.png";

export type ContactType = {
	icon: string;
	name: string;
	url: string;
};

export const contacts: Array<ContactType> = [
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
		url: "mailto:tiago.campelo.dev@gmail.com",
	},
];
