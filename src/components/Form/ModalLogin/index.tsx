import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../Providers/UserContext";
import { ILoginFormValue } from "../../../Providers/UserContext/@typesUser";
import { ButtonPrimary } from "../../../styles/buttons";
import { StyledLoginModal } from "./styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../Input";
import InputPassword from "../../InputPassword";
import { StyledContainerModal } from "../../../styles/container";

const ModalLogin = () => {
  const { userLogin, setModalLog, setModalReg } = useContext(UserContext);

  const formSchemLogin = yup.object().shape({
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("O email digitado é inválido."),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValue>({
    resolver: yupResolver(formSchemLogin),
  });

  const submit: SubmitHandler<ILoginFormValue> = (data) => {
    userLogin(data);
  };

  return (
    <StyledContainerModal>
      <StyledLoginModal>
        <div className="boxLogin">
          <header>
            <h2>Login</h2>
            <span onClick={() => setModalLog(false)}>x</span>
          </header>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              label="Email"
              placeholder="Digite seu novo email"
              inputId="email"
              {...register("email")}
              error={errors.email?.message}
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

            <ButtonPrimary className="buttonEnviar" type="submit">
              Enviar
            </ButtonPrimary>

            <h3>Não Possui Conta? Cadastre-se!</h3>

            <ButtonPrimary
              className="cadastrar"
              type="button"
              onClick={() => setModalReg(true)}
            >
              Cadastrar
            </ButtonPrimary>
          </form>
        </div>
      </StyledLoginModal>
    </StyledContainerModal>
  );
};

export default ModalLogin;
