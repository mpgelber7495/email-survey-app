import React, { PureComponent, Component } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

class Chart extends Component {
  render() {
    console.log(this.props);
    const data = [
      { name: "Yes", value: this.props.survey.yes },
      { name: "No", value: this.props.survey.no }
    ];
    console.log(this.props);
    return (
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={50}
          fill="#8884d8"
          cx="50%"
          cy="50%"
          label
        />
      </PieChart>
    );
  }
}

export default Chart;
