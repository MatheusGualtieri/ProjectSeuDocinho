import Input from "../../Input";
import InputPassword from "../../InputPassword";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserUpdate } from "../../../Providers/UserContext/@typesUser";
import { StyledForm } from "./style";
import { ButtonPrimary } from "../../../styles/buttons";
import { useUserContext } from "../../../Providers/UserContext";

const formSchema = yup.object({
  email: yup.string().email("E-mail inválido"),
  adress: yup.string(),
  phone: yup.number(),
  password: yup
    .string()
    .min(6, "A senha precisa ter pelo menos seis caracteres"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Senha diferente"),
});

const UpdateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserUpdate>({
    resolver: yupResolver(formSchema),
  });

  const { updateUser } = useUserContext();

  const onSubmitFunction = (data: IUserUpdate) => {
    updateUser(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Atualizar informações</h2>
      <Input
        label="Email"
        placeholder="Digite seu novo email"
        inputId="email"
        {...register("email")}
        error={errors.email?.message}
        type="text"
      />
      <Input
        label="Endereço"
        placeholder="Digite seu novo endereço"
        inputId="adress"
        {...register("adress")}
        error={errors.adress?.message}
        type="text"
      />
      <Input
        label="Telefone/Celular"
        placeholder="Digite seu novo número"
        inputId="phone"
        {...register("phone")}
        error={errors.phone?.message}
        type="text"
      />
      <InputPassword
        label="Senha"
        placeholder="Digite sua nova senha"
        inputId="password"
        {...register("password")}
        error={errors.password?.message}
        type="password"
      />
      <InputPassword
        label="Confirmar Senha"
        placeholder="Confirme sua senha"
        inputId="confirmPassword"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
        type="password"
      />
      <ButtonPrimary type="submit">Enviar</ButtonPrimary>
    </StyledForm>
  );
};
export default UpdateForm;
