import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const SchemaEmail = zod.object({
  email: zod.string().email({ message: "Please provide a valid email." }),
});

type SchemaEmailType = zod.infer<typeof SchemaEmail>;

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaEmailType>({
    resolver: zodResolver(SchemaEmail),
  });

  async function handleSignIn(data: SchemaEmailType) {
    try {
      console.log(data);
      toast.success("Enviamos um link de autenticacao para seu e-mail", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data),
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
          <Link to="/sign-up">Novo estabelecimento</Link>
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
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col gap-1"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail: </Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
