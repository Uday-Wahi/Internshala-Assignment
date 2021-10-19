json = {
  strike: [2640, 2660, 2680, 2700, 2720, 2740, 2760, 2780, 2800, 2820],
  calloi: [
    112000, 163750, 302250, 1448000, 382000, 770250, 485000, 293500, 2026250,
    201250,
  ],
  putoi: [
    213750, 231750, 171500, 773250, 142750, 162000, 69750, 30000, 222000, 5500,
  ],
};

var options = {
  colors: ["#b00909", "#0a610a"],
  series: [
    {
      name: "Call OI",
      data: json.calloi,
    },
    {
      name: "Put OI",
      data: json.putoi,
    },
  ],
  xaxis: {
    categories: json.strike,
    labels: {
      show: true,
      rotate: -45,
      rotateAlways: true,
    },
  },
  chart: {
    type: "bar",
    height: 400,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  legend: {
    position: "top",
    horizontalAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    markers: {
      width: 26,
      height: 12,
    },
  },

  yaxis: {
    title: {
      text: "Open Interest",
      style: {
        fontSize: "16px",
      },
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
