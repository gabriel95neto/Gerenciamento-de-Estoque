import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleSubmit, register, errors, isPending} = useLoginController();
  return (
    <div className="h-full flex flex-col justify-center max-w-md mx-auto">
      <header className="flex items-center flex-col gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Entre em sua conta</h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">Novo por aqui?</span>
          <Link className="tracking-[-0.5px] font-medium text-teal-900" to="/register">
            Crie uma conta
          </Link>
        </p>
      </header>
      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input type="email" error={errors.email?.message} placeholder="E-mail" {...register("email")} />
        <Input type="password" error={errors.password?.message} placeholder="Senha" {...register("password")} />
        <Button isLoading={isPending} type="submit" className="mt-2">Entrar</Button>
      </form>
    </div>
  )
}

export default Login;
