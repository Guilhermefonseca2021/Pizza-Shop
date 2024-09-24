import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { ArrowRight, Search, X } from "lucide-react";
import OrderDetails from "./order-details";

export default function OrderTableRow() {
  return (
    <>
      <TableRow>
        <TableCell>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido</span>
              </Button>
            </DialogTrigger>

            <DialogContent>
              <OrderDetails />
            </DialogContent>
          </Dialog>
        </TableCell>
        <TableCell className="font-mono text-sm font-medium">
          34f2fg1r3tn41n
        </TableCell>
        <TableCell className="font-mono font-medium text-sm">
          ha 15 dias
        </TableCell>
        <TableCell className="text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400"></span>
            <span className="font-medium text-muted-foreground">Pendente</span>
          </div>
        </TableCell>
        <TableCell className="font-medium">Guilherme Fonseca</TableCell>
        <TableCell className="font-medium">R$ 149,99</TableCell>
        <TableCell>
          <Button variant="outline" size="sm">
            <ArrowRight className="mr-2 h-3 w-3" />
            Aprovar
          </Button>
        </TableCell>
        <TableCell>
          <Button variant="ghost" size="sm">
            <X className="mr-2 h-3 w-3" />
            Cancelar
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}
