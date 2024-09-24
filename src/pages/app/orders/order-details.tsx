import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

export default function OrderDetails() {
  return (
    <DialogContent className="p-2">
      <DialogHeader>
        <DialogTitle className="text-lg">Pedido: 234234ffwf</DialogTitle>
        <DialogDescription className="text-xs font-medium">
          Detalhes do pedido: dewfwef
        </DialogDescription>
      </DialogHeader>
      <Table>
        <TableRow>
          <TableCell className="text-muted-foreground">Status:</TableCell>
          <TableCell className="flex justify-end ">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              <span className="font-medium text-muted-foreground">
                Pendente
              </span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-muted-foreground">Cliente:</TableCell>
          <TableCell className="flex justify-end ">
            Guilherme Fonseca Dos Santos
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-muted-foreground">Telefone:</TableCell>
          <TableCell className="flex justify-end ">(33) 99999-9999</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-muted-foreground">E-mail:</TableCell>
          <TableCell className="flex justify-end ">
            gasbibfeif@gmail.com
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-muted-foreground">Realizado ha:</TableCell>
          <TableCell className="flex justify-end ">3 meses</TableCell>
        </TableRow>
      </Table>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto:</TableHead>
            <TableHead>Qtd:</TableHead>
            <TableHead>Preco:</TableHead>
            <TableHead>Subtotal:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Pizza peperoni Familia</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell>R$ 69,90</TableCell>
            <TableCell>R$ 139,90</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pizza Mussarela Familia</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell>R$ 59,90</TableCell>
            <TableCell>R$ 119,90</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido:</TableCell>
              <TableCell className="text-right font-medium">
                R$ 259,80
              </TableCell>
            </TableRow>
          </TableFooter>
      </Table>
    </DialogContent>
  );
}
