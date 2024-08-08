
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from 'zod'
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { SigninParams } from "../../../app/services/authService/signin";
import { authService } from "../../../app/services/authService";
import { useAuth } from "../../../hooks/useAuth";


const schema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Infome um e-mail válido"),
  password: z.string().min(6, "A senha deve conter no mínimo 6 dígitos")
})

type FormData = z.infer<typeof schema>

export function useLoginController() {
  const { handleSubmit: hookFormHandleSubmit, register, formState: { errors} } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const {isPending, mutateAsync} = useMutation({
    mutationFn: async (data: SigninParams) => { return authService.signin(data)}
  })

  const { signin} = useAuth();

  const handleSubmit = hookFormHandleSubmit(async(data) => {
    try {
      const {accessToken} = await mutateAsync(data);
      signin(accessToken);
    } catch {
      toast.error("Credenciais inválidas");
    }
  })

  return {handleSubmit ,register, errors, isPending}
}
