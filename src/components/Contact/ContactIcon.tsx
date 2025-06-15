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

export default ContactIcon;
