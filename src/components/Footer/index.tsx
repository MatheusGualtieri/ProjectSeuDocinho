import { StyledFooter } from "./style";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <StyledFooter>
      <img src={Logo} alt="" />
      <div className="footerImage">
        <a href="https://www.instagram.com/seudocinho.sc/" target="_blank">
          <AiFillInstagram className="image" />
        </a>
        <IoLogoWhatsapp className="image" />
      </div>
    </StyledFooter>
  );
};

export default Footer;
