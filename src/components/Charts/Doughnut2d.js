import React, { Component } from "react";
import ReactDOM from "react-dom";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponents = ({ data }) => {
  const chartData = {
    chart: {
      caption: "Most Popular Language",
      decimals: 0,
      doughnutRadius: "45%",
      showPercentValues: 0,
      theme: "candy",
    },
    data,
  };
  const chartConfigs = {
    type: "doughnut2d",
    width: 400,
    height: 400,
    dataFormat: "json",
    dataSource: chartData,
  };

  return <ReactFC {...chartConfigs} />;
};
export default ChartComponents;
