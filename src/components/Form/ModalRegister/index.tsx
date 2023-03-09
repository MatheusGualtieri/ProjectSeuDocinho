import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { UserContext } from "../../../Providers/UserContext";
import { IRegisterFormValue } from "../../../Providers/UserContext/@typesUser";
import { ButtonPrimary } from "../../../styles/buttons";
import Input from "../../Input";
import { StyledRegister } from "./styled";

const ModalRegister = () => {
  const { userRegister, setModalReg } = useContext(UserContext);

  const formSchemRegister = yup.object().shape({
    name: yup.string().required("Nome é obrigatório."),
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("O email digitado é inválido."),
    password: yup
      .string()
      .required("Senha é obrigatória")
      .min(6, "A senha precisa ter pelo menos seis caracteres"),
    confirmpassword: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("password")], "As senhas não correspondem"),
    bio: yup.string().required("Bio é obrigatória."),
    contact: yup.string().required("Contato é obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValue>({
    resolver: yupResolver(formSchemRegister),
  });

  const submit: SubmitHandler<IRegisterFormValue> = (data) => {
    userRegister(data);
  };

  return (
    <StyledRegister>
      <div className="box">
      <header>
        <h2>cadastro</h2>
        <span onClick={() => setModalReg(false)}>x</span>
      </header>
      <form onSubmit={handleSubmit(submit)}>
      <Input
          label="Name"
          placeholder="Digite seu nome"
          inputId="name"
          {...register("name")}
          error={errors.name?.message}
          type="text"
        />

        <Input
          label="Email"
          placeholder="Digite seu email"
          inputId="email"
          {...register("email")}
          error={errors.email?.message}
          type="text"
        />

        <Input
          label="Endereço"
          placeholder="Digite seu endereço"
          inputId="adress"
          {...register("adress")}
          error={errors.adress?.message}
          type="text"
        />
        <Input
          label="Telefone/Celular"
          placeholder="Digite seu número"
          inputId="phone"
          {...register("phone")}
          error={errors.phone?.message}
          type="text"
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          inputId="password"
          {...register("password")}
          error={errors.password?.message}
          type="password"
        />
        <Input
          label="Confirmar Senha"
          placeholder="Confirme sua senha"
          inputId="confirmPassword"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
          type="password"
        />
        <ButtonPrimary type="submit">Enviar</ButtonPrimary>
      </form>
      </div>
    </StyledRegister>
  );
};

export default ModalRegister;
