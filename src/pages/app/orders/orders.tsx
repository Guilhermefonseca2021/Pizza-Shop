import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1>Pedidos</h1>
      </div>
      <div className="space-y-2.5 w-full">
        <form className="flex items-center gap-2" action="">
          <span className="text-sm font-semibold">Filtros</span>
          <Input className="h-8 w-[320px]" placeholder="Nome do cliente" />
        </form>
        <div className="border rounded-md">
          <Table>
            <TableRow>
              <TableHead>Identificador</TableHead>
              <TableHead>Realizado ha</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Total Do Pedido</TableHead>
            </TableRow>
            <TableBody>
              <TableRow>
                <TableCell>
                    <Button variant="outline">
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                </TableCell>
                <TableCell>
                    
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
