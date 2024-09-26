import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export default function MonthOrdersAmount() {
  return (
    <>
      <Card>
        <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
          <CardTitle className="text-base font-semibold">
            Pedidos (mes)
          </CardTitle>
          <Utensils className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="space-x-1">
          <span className="text-2xl font-bold tracking-tight">45 pedidos</span>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 dark:text-emerald-400">+6% </span>
            em relacao ao mes passado{" "}
          </p>
        </CardContent>
      </Card>
    </>
  );
}
