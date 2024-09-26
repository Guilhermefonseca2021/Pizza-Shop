import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export default function MountCanceledOrdersAmount() {
  return (
    <>
      <Card>
        <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
          <CardTitle className="text-base font-semibold">Pedidos cancelados(mes)</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="space-x-1">
          <span className="text-2xl font-bold tracking-tight">26 pedidos</span>
          <p className="text-xs text-muted-foreground">
            <span className="text-rose-500 dark:text-rose-400">2% </span>
            em relacao ao mes do passado
          </p>
        </CardContent>
      </Card>
    </>
  )
}
