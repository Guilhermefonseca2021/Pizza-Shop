import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart } from "lucide-react";
// import PieChartComponent from "./piechart-component";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const data = [
  { name: 'Mussarela', amount: 40 },
  { name: 'Calabresa', amount: 32 },
  { name: 'Requeijao', amount: 60 },
  { name: 'Chocolate', amount: 34},
  { name: '2 amores', amount: 81 },
];

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
      <ResponsiveContainer width="100%" height={280}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="amount"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
