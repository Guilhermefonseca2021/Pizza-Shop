import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart } from "lucide-react";
import PieChartComponent from "./piechart-component";

export default function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="p-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium ">
            Produtos populares
          </CardTitle>
          <BarChart className="w-4 h-4" />
        </div>
      </CardHeader>
      <CardContent>
        <PieChartComponent />
      </CardContent>
    </Card>
  );
}
