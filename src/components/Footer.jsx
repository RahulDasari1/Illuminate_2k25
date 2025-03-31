import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {


  return (
    <footer className="bg-[#00171f] text-white xl:px-10 py-5 px-5">
      <div className="border-white/80 border-b-2">
        <div className="xl:flex justify-between items-start xl:px-15">
          <div className="xl:w-2/5">
            <img src="/logo.png" alt="Logo" className="h-20" />
            <p className="text-sm xl:text-base">
              Illuminate 2K25: CMR Institute of Technology's premier tech fest,
              inspiring innovation and tech excellence.
            </p>
          </div>
          <div className="py-5">
            {navLinks.map((ele, id) => (
              <a key={id} href={ele.path} className="hover:text-[#13D0F4]">
                <p className="pb-1">{ele.text}</p>
              </a>
            ))}
          </div>
          <div className="py-2">
            <h1>Follow Us</h1>
            <div className="flex text-3xl py-3 gap-3">
              <Link
                className="hover:text-[#13D0F4]"
                to={"https://www.instagram.com/cmrit_illuminate"}
                target="_blank_"
              >
                <FaInstagram />
              </Link>
              <Link
                className="hover:text-[#13D0F4]"
                to={"https://www.linkedin.com/company/cmritilluminate/"}
                target="_blank_"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="hover:text-[#13D0F4]"
                to={"https://x.com/cmritilluminate"}
                target="_blank_"
              >
                <FaXTwitter/>
              </Link>
              <Link
                className="hover:text-[#13D0F4]"
                to={"https://www.youtube.com/@IlluminateCmrit"}
                target="_blank_"
              >
                <FaYoutube/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-lg py-3">
        © Copyright Illuminate 2025 CMRIT. All rights reserved.
      </h1>
    </footer>
  );
};
export default Footer;
