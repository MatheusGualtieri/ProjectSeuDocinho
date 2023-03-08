import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../../Providers/UserContext';
import { ILoginFormValue } from '../../../Providers/UserContext/@typesUser';
import { ButtonPrimary } from '../../../styles/buttons';
import Input from '../Input';
import { StyledLoginModal } from './styled';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const ModalLogin = () => {
  const { userLogin } = useContext(UserContext);

  const formSchemLogin = yup.object().shape({
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("O email digitado é inválido."),
    password: yup
      .string()
      .required("Senha é obrigatória")
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
    <StyledLoginModal>
      <header>
        <h2></h2>
        <span>x</span>
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

      <Input
         label="Senha"
         placeholder="Digite sua nova senha"
         inputId="password"
         {...register("password")}
         error={errors.password?.message}
         type="password"
      />
     <ButtonPrimary type="submit">Enviar</ButtonPrimary>
    </form>
    </StyledLoginModal>
  );
};

export default ModalLogin;