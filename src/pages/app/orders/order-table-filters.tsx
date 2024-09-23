import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

export default function OrderTableFilters() {
  return (
    <>
      <form className="flex items-center gap-2" action="">
        <span className="text-sm font-semibold">Filtros:</span>
        <Input className="h-8 w-auto" placeholder="Id do pedido" />
        <Input className="h-8 w-[320px]" placeholder="Nome do cliente" />
        <Select defaultValue="all">
          <SelectTrigger className="h-8 w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos pedidos</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="canceled">Cancelado</SelectItem>
            <SelectItem value="preparing">Em preparo</SelectItem>
            <SelectItem value="delivering">Em entrega</SelectItem>
            <SelectItem value="delivered">Entregue</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="secondary" type="submit">
          <Search className="mr-2 h-4 w-4 " />
          Filtrar Resultados
        </Button>
        <Button variant="ghost" type="button">
          <X className="mr-2 h-4 w-4 " />
          Remover Filtros
        </Button>
      </form>
    </>
  );
}
