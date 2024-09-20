import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SchemaEmail = zod.object({
  restaurantName: zod.string(),
  managerName: zod.string(),
  phone: zod.string(),
  email: zod.string().email({ message: "Por favor digite um e-mail valido." }),
});

type SchemaEmailType = zod.infer<typeof SchemaEmail>;

export default function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaEmailType>({
    resolver: zodResolver(SchemaEmail),
  });

  async function handleSignUp(data: SchemaEmailType) {
    try {
      console.log(data);
      toast.success("Restaurante cadastrado com sucesso", {
        action: {
          label: "Reenviar",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch {
      toast.error("credenciais invalidas");
    }
  }

  return (
    <div>
      <Helmet title="login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="w-[250px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar o painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col gap-1"
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do restaurante: </Label>
              <Input
                id="restaurantName"
                type="restaurantName"
                {...register("restaurantName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome: </Label>
              <Input
                id="managerName"
                type="managerName"
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="e-mail">Seu e-mail: </Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu telefone: </Label>
              <Input id="phone" type="phone" {...register("phone")} />
            </div>
            {errors.root?.message && (
              <p className="text-red-500 text-sm">
                Por favor preencha os campos vazios
              </p>
            )}
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>
            <p className="px-0 text-center text-xs leading-relaxed text-muted-foreground">
              {" "}
              Ao continuar voce concorda com os{" "}
              <a href="" className="font-bold underline underline-offset-4">
                termos de servico
              </a>{" "}
              e{" "}
              <a href="" className="font-bold underline underline-offset-4">
                politicas de privacidade.
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
