import "./barChartBox.scss";
import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";
type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};
function BarChartBox(props: Props) {
  return (
    <div className="barChart">
      <h1>{props.title}</h1>
      <div className="cart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#00004d", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartBox;
