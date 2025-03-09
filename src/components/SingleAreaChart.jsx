import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import monthlySales from "../../monthlySales.json";

function SingleAreaChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const formattedData = monthlySales.monthlySales.map((item) => ({
      x: new Date(item.date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
      }),
      y: item.sales,
    }));
    setChartData(formattedData);
  }, []);

  useEffect(() => {
    const options = {
      chart: {
        height: 300,
        type: "area",
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      series: [
        {
          name: "Sales",
          data: chartData,
        },
      ],
      legend: { show: false },
      dataLabels: { enabled: false },
      stroke: { curve: "straight", width: 2 },
      grid: { strokeDashArray: 2 },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          opacityFrom: 0.1,
          opacityTo: 0.8,
        },
      },
      xaxis: {
        type: "category",
        tickPlacement: "on",
        categories: chartData.map((item) => item.x),
        axisBorder: { show: false },
        axisTicks: { show: false },
        crosshairs: {
          stroke: { dashArray: 0 },
          dropShadow: { show: false },
        },
        tooltip: { enabled: false },
        labels: {
          style: {
            colors: "#9ca3af",
            fontSize: "13px",
            fontFamily: "Inter, ui-sans-serif",
            fontWeight: 400,
          },
          formatter: (title) => {
            if (title) {
              const newT = title.split(" ");
              return `${newT[0]} ${newT[1].slice(0, 4)}`;
            }
            return title;
          },
        },
      },
      yaxis: {
        labels: {
          align: "left",
          minWidth: 0,
          maxWidth: 140,
          style: {
            colors: "#9ca3af",
            fontSize: "13px",
            fontFamily: "Inter, ui-sans-serif",
            fontWeight: 400,
          },
          formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
        },
      },
      tooltip: {
        x: { format: "MMMM yyyy" },
        y: {
          formatter: (value) => `${value >= 1000 ? `${value / 1000}k` : value}`,
        },
      },
      responsive: [
        {
          breakpoint: 568,
          options: {
            chart: { height: 300 },
            xaxis: {
              labels: {
                style: {
                  colors: "#9ca3af",
                  fontSize: "11px",
                  fontFamily: "Inter, ui-sans-serif",
                  fontWeight: 400,
                },
                offsetX: -2,
                formatter: (title) => title.slice(0, 3),
              },
            },
            yaxis: {
              labels: {
                align: "left",
                minWidth: 0,
                maxWidth: 140,
                style: {
                  colors: "#9ca3af",
                  fontSize: "11px",
                  fontFamily: "Inter, ui-sans-serif",
                  fontWeight: 400,
                },
                formatter: (value) =>
                  value >= 1000 ? `${value / 1000}k` : value,
              },
            },
          },
        },
      ],
    };

    if (chartRef.current && !chartRef.current.chart) {
      chartRef.current.chart = new ApexCharts(chartRef.current, options);
      chartRef.current.chart.render();
    }

    return () => {
      if (chartRef.current && chartRef.current.chart) {
        chartRef.current.chart.destroy();
        chartRef.current.chart = null;
      }
    };
  }, [chartData]);

  return <div ref={chartRef} id="hs-single-area-chart"></div>;
}

export default SingleAreaChart;
