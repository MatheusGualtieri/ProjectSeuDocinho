import Input from "../../Input";
import InputPassword from "../../InputPassword";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserUpdate } from "../../../Providers/UserContext/@typesUser";
const formSchema = yup.object({
  email: yup.string().email("E-mail inválido"),
  adress: yup.string(),
  phone: yup.number(),
  password: yup.string(),
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

  const onSubmitFunction = (data: IUserUpdate) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
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
      <button type="submit">Enviar</button>
    </form>
  );
};
export default UpdateForm;
