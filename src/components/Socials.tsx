import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/willblades' },
  { icon: <FaLinkedinIn />, path: 'https://ca.linkedin.com/in/will-blades-4294a313' },
  { icon: <FaYoutube />, path: '' },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

