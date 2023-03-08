import { useUserContext } from "../../Providers/UserContext";
import Input from "../Input";
import { StyledUserInfo } from "./style";

const UserInfo = () => {
  const { user } = useUserContext();

  return (
    <StyledUserInfo>
      <h2>Suas informações</h2>
      <Input
        error=""
        inputId="nameReadonly"
        label="Nome"
        placeholder=""
        value={user?.name}
        readOnly
      />
      <Input
        error=""
        inputId="emailReadonly"
        label="Email"
        placeholder=""
        value={user?.email}
        readOnly
      />
      <Input
        error=""
        inputId="adressReadonly"
        label="Endereço"
        placeholder=""
        value={user?.adress}
        readOnly
      />
      <Input
        error=""
        inputId="phoneReadonly"
        label="Telefone/Celular"
        placeholder=""
        value={user?.phone}
        readOnly
      />
    </StyledUserInfo>
  );
};
export default UserInfo;
