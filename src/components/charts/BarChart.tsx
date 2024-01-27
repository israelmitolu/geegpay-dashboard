import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],

  tooltip: {
    custom: ({ series, seriesIndex, dataPointIndex }) => {
      const value = series[seriesIndex][dataPointIndex];
      return `
    <div class="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip">${value}
    <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    
      `;
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      show: true,
      style: {
        colors: "#525252",
        fontSize: "14px",
        fontWeight: "600",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        colors: "#525252",
        fontSize: "12px",
        fontWeight: "600",
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.2,
      opacityTo: 1,
      colorStops: [
        [
          {
            offset: 0,
            color: "#34CAA5",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#34CAA500",
            opacity: 1,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 15,
      columnWidth: "30px",
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "center",
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "12px",

    markers: {
      radius: 99,
    },
  },
};

type BarChartStateProps = {
  series: {
    name: string;
    data: (number | null)[];
  }[];
};

const BarChart = () => {
  const [state] = useState<BarChartStateProps>({
    series: [
      {
        name: "Daily Traffic",
        data: [
          7500, 18000, 3000, 30000, 10000, 45000, 10000, 23000, 35000, 5000,
          30000, 25000,
        ],
      },
    ],
  });

  // probably use a useeffect to reload the data

  return (
    <ReactApexChart
      options={options}
      series={state.series}
      type="bar"
      height="100%"
      width="100%"
    />
  );
};

export default BarChart;
