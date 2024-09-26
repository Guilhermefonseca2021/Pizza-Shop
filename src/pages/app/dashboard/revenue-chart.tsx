import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts";
import colors from 'tailwindcss/colors'

const data = [
  { date: "10/12", revenue: 120 },
  { date: "12/12", revenue: 40 },
  { date: "13/12", revenue: 543 },
  { date: "14/12", revenue: 44 },
  { date: "15/12", revenue: 66 },
  { date: "16/12", revenue: 566 },
  { date: "17/12", revenue: 87 },
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
      <CardContent className="grid grid-cols-9 gap-4">
      <ResponsiveContainer width="100%" height={248}>
            <LineChart data={data} style={{ fontsize: 12 }}>
              <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={90}
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
              />

              <CartesianGrid vertical={false} className="stroke-muted" />

              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors.violet['500']}
              />
            </LineChart>
          </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
