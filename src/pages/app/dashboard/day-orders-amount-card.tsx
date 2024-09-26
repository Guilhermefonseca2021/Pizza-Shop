import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export default function DayOrdersAmountCard() {
  return (
    <>
      <Card>
        <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
          <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
          <Utensils className="h-4 w-4 text-muted-foreground" />
          
        </CardHeader>
        <CardContent className="space-x-1">
          <span className="text-2xl font-bold tracking-tight">246 pedidos</span>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 dark:text-emerald-400">-4% </span>
            em relacao a ontem
          </p>
        </CardContent>
      </Card>
    </>
  )
}
