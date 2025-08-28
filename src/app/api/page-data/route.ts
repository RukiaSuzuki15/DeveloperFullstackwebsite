import { NextResponse } from "next/server";

const contactBar = {
  contactItems: [
  ],
  socialItems: [
    {
      platform: "dribbble",
      icon: "/images/icon/dribble-icon.svg",
      link: "https://dribbble.com"
    },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://linkedin.com"
    },
    {
      platform: "facebook",
      icon: "/images/icon/facebook-icon.svg",
      link: "https://facebook.com"
    }
  ]
};

const educationData = {
  education: [
    {
      title: "NIL International College - 2010",
      description: "Helped in the acquisition of a good foundation in computer science"
    },
    {
      title: "Master Diploma - 2012",
      description: "Master in software engineering gained in University of Yaoundé 1"
    },
    {
      title: "Master in User Experience - 2014",
      description: "Worked at Corextrem Technologies"
    }
  ],
  skills: [
    {
      name: "Figma",
      icon: "/images/home/education-skill/figma-icon.svg",
      rating: 5
    },
    {
      name: "Photoshop",
      icon: "/images/home/education-skill/photoshop-icon.svg",
      rating: 5
    },
    {
      name: "Sketch",
      icon: "/images/home/education-skill/sketch-icon.svg",
      rating: 4
    },
    {
      name: "Adobe XD",
      icon: "/images/home/education-skill/adobe-icon.svg",
      rating: 4
    },
    {
      name: "Framer",
      icon: "/images/home/education-skill/framer-icon.svg",
      rating: 5
    },
    {
      name: "InVision",
      icon: "/images/home/education-skill/invision-icon.svg",
      rating: 3
    }
  ]
};

const contactLinks = {
  socialLinks: [
    {
      title: "Dribbble",
      href: "/"
    },
    {
      title: "Facebook",
      href: "/"
    },
    {
      title: "LinkedIn",
      href: "/"
    }
  ],
  contactInfo: [
    {
      type: "email",
      label: "mefoguehadjira@gmail.com",
      link: "mailto:mefoguehadjira@gmail.com"
    },
    {
      type: "phone",
      label: "+237 656 107 950",
      link: "tel:+237656107950"
    }
  ]
};

export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
