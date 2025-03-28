import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import EventLogo from '/logo_.svg';

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-900 px-5">
      <div className="px-20 py-5 border-b flex items-center justify-between">
        <img className="w-60" src={EventLogo} alt="" />
        <span className="flex gap-5 text-lg">
          {navLinks.map((link,i) => (
            <a key={i} className="hover:text-[#13D0F4]" href={link.path}>
              <p>{link.text}</p>
            </a>
          ))}
        </span>
        <span>
          <span className="flex gap-3 items-center py-1">
            <Link
              className="hover:text-[#13D0F4]"
              to={"https://www.instagram.com/cmrit_illuminate"}
              target="_blank_"
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              className="hover:text-[#13D0F4]"
              to={"https://www.linkedin.com/company/cmritilluminate/"}
              target="_blank_"
            >
              <FaLinkedin size={30} />
            </Link>
          </span>
        </span>
      </div>
      <h1 className="text-center text-lg py-3">
        © Copyright Illuminate 2025 CMRIT. All rights reserved.
      </h1>
    </footer>
  );
};
export default Footer;
