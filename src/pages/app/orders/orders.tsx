import {
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import OrderTableRow from "./order-table-row";
import OrderTableFilters from "./order-table-filters";

export default function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1>Pedidos</h1>
      </div>
      <div className="space-y-2.5 w-full">
        <OrderTableFilters />
        <div className="border rounded-md">
          <Table>
            <TableRow>
              <TableHead className="w-[64px]"></TableHead>
              <TableHead className="w-[140px]">Identificador</TableHead>
              <TableHead className="w-[180px]">Realizado ha</TableHead>
              <TableHead className="w-[140px]">Status</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead className="w-[140px]">Total Do Pedido</TableHead>
              <TableHead className="w-[164px]"></TableHead>
              <TableHead className="w-[132px]"></TableHead>
            </TableRow>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <OrderTableRow key={i} />
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
