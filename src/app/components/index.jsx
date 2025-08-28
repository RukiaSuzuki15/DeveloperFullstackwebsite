       // src/components/Contact.jsx
import React from "react";

const contacts = [
  {
    type: "email",
    label: "mefoguehadjira@gmail.com",
    icon: "/images/icon/mail-icon.svg",
    link: "mailto:mefoguehadjira@gmail.com"
  },
  {
    type: "phone",
    label: "+237 656 10 79 50",
    icon: "/images/icon/call-icon.svg",
    link: "tel:+237656107950"
  },
  {
    type: "website",
    label: "www.myenterprise.com",
    icon: "/images/icon/web-icon.svg",
    link: "https://www.mywebsite.com"
  }
];

const Contact = () => {
  return (
    <div className="w-full py-10">
      <ul className="flex flex-col items-center space-y-4">
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-center justify-center"
          >
            <img src={contact.icon} alt={contact.type} className="w-6 h-6" />
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              {contact.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
