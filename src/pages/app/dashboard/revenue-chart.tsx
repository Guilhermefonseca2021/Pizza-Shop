import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import colors from "tailwindcss/colors";

const data = [
  {
    date: "11/12",
    selled: 500,
  },
  {
    date: "12/12",
    selled: 300,
  },
  {
    date: "13/12",
    selled: 200,
  },
  {
    date: "14/12",
    selled: 566,
  },
  {
    date: "15/12",
    selled: 590,
  },
  {
    date: "16/12",
    selled: 230,
  },
  {
    date: "17/12",
    selled: 350,
  },
];

export default function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium ">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diaria no periodo</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888888"
              tickLine={false}
              axisLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="selled"
              stroke={colors.violet[400]}
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
