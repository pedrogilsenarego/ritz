import { Cell, Pie, PieChart } from "recharts";
import "./index.css";

type Props = {
  data: { name: string; value: number }[];
};

const TwoLevelChartPie = ({ data }: Props) => {
  const COLORS_RED = [
    "rgba(0, 180, 216, 1)",
    "rgba(0, 119, 182, 1)",
    "rgba(3, 4, 94, 1)",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        style={{
          fill: "black",
          fontSize: "12px",
        }}
        x={x}
        y={y}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${data[index]?.name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <PieChart width={150} height={150}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        startAngle={-90}
        outerRadius={60}
        innerRadius={45}
        fill="#a40000"
        labelLine={false}
        //label={renderCustomizedLabel}
      >
        {data?.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS_RED[index % COLORS_RED.length]}
            style={{
              //cursor: "pointer",
              stroke: "#ffffff66",
              // filter: `drop-shadow(0px 0px 3px ${
              //   COLORS_RED[index % COLORS_RED.length]
              // }`,
            }}
            stroke="0"
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default TwoLevelChartPie;
