import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-zinc-900 px-5" >
       <div className="px-5 py-5 border-b" >
       <h1 className="font-semibold text-lg" >Contact Us On</h1>
        <span className="flex gap-3 items-center py-1" >
            <Link className="hover:text-[#13D0F4]" to={"https://www.instagram.com/cmrit_illuminate"} target="_blank_" >
                <FaInstagram size={30} />
            </Link> 
            <Link className="hover:text-[#13D0F4]" to={"https://www.linkedin.com/company/cmritilluminate/"} target="_blank_"  >
                <FaLinkedin size={30}/>
            </Link>  
        </span>
       </div>
       <h1 className="text-center text-lg py-3" >Copyright @ Illuminate 2025 CMRIT</h1>
    </div>
  )
}
export default Footer