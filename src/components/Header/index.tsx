import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { StyledHeader } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Logo from "../../assets/Logo.png";
import { StyledDropDownMenu } from "./styleDropDownMenu";
import { StyledDropDownSearch } from "./styleDropDownSearch";
import { ProductContext } from "../../Providers/ProductContext/ProductContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { ITitle } from "../../Providers/ProductContext/@typesProduct";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownSearch, setDropDownSearch] = useState(false);
  const { register, handleSubmit } = useForm<ITitle>();
  const { searchProduct } = useContext(ProductContext);

  const submit: SubmitHandler<ITitle> = (data) => {
    searchProduct(data);
  };

  return (
    <StyledHeader>
      <div className="conteinerGeral">
        <div className="color">
          <div className="conteinerImageMenu">
            <img src={Logo} alt="" />
            <div className="imagesMenu">
              {
                <FaSistrix
                  className="image"
                  onClick={() => setDropDownSearch(!dropDownSearch)}
                />
              }
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
              <StyledDropDownMenu>
                <button>Login</button>
                <button>Cadastrar</button>
                <button>Perfil</button>
              </StyledDropDownMenu>
            )}
          </div>
          <div>
            {dropDownSearch && (
              <StyledDropDownSearch>
                <form onSubmit={handleSubmit(submit)}>
                  <input
                    type="text"
                    placeholder="Digite o nome do produto"
                    {...register("title")}
                  />
                  <button type="submit">
                    {<FaSistrix className="searach" />}
                  </button>
                </form>
              </StyledDropDownSearch>
            )}
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
