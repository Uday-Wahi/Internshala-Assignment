// variables initialize
const selectoption = document.getElementById("dropdown");
const submitbtn = document.getElementById("submit");
submitbtn.addEventListener("click", () => {
  text = selectoption.options[selectoption.selectedIndex].text;
  valueUpdate(text);
});
const valueUpdate = (option) => {
  console.log(option);
};
// fetch data
fetch("https://docker.api.srifintech.com/testassignment", {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Referer: "https://docker.api.srifintech.com",
    Origin: "https://docker.api.srifintech.com",
  },
  method: "POST",
  body: JSON.stringify({ ticker: "RELIANCE" }),
})
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

/*
Host: docker.api.srifintech.com
Accept: application/json
Content-Type: application/json
Referer: https://docker.api.srifintech.com
Origin: https://docker.api.srifintech.com

{
"ticker":"INFY"
}
*/

// temp data
json = {
  strike: [1720, 1740, 1760, 1780, 1800, 1820, 1840, 1860, 1880, 1900],
  calloi: [
    599400, 418200, 460800, 318000, 505000, 680400, 634800, 748400, 472800,
    303600,
  ],
  putoi: [
    421200, 484200, 688800, 276000, 693000, 247200, 223200, 31200, 9000, 26400,
  ],
};

// defining options
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
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30%",
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
  noData: {
    text: "Loading...",
    align: "center",
    verticalAlign: "middle",
    offsetY: -40,
    style: {
      color: "#000000",
      fontSize: "20px",
    },
  },
};

// initialize a chart
var chart = new ApexCharts(document.querySelector("#chart"), options);
// render chart
chart.render();
