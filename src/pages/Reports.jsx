import BarChart from "../components/BarChart";
import SingleAreaChart from "../components/SingleAreaChart";

function Reports() {
  return (
    <div>
      <SingleAreaChart />
      <div className="flex items-center flex-col justify-center p-2">
        <BarChart />
      </div>
    </div>
  );
}

export default Reports;
