import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { StyledHeader } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Logo from "../../assets/Logo.png";
import { StyledDropDown } from "./styleDropDown";
import { UserContext } from "../../Providers/UserContext";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const {setModalLog, setModalReg} = useContext(UserContext)

  return (
    <StyledHeader>
      <div className="conteinerImageMenu">
        <img src={Logo} alt="" />
        <div className="imagesMenu">
          <FaSistrix className="image" />
          <FaShoppingCart className="image" />
          {dropDown ? (
            <MdClose className="image" onClick={() => setDropDown(false)} />
          ) : (
            <GiHamburgerMenu
              className="image"
              onClick={() => setDropDown(true)}
            />
          )}
          <IoMdExit className="image" />
        </div>
      </div>
      <div className="conteinerDropDown">
        {dropDown && (
          <StyledDropDown dropDown={dropDown} className="dropDown">
            <button type="button" onClick={() => setModalLog(true)}>Login</button>
            <button type="button" onClick={() => setModalReg(true)} >Cadastrar</button>
            <button>Perfil</button>
          </StyledDropDown>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
