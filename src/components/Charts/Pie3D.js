import React, { Component } from "react";
import ReactDOM from "react-dom";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponents = ({ data }) => {
  const chartData = {
    chart: {
      caption: "Languages",
      decimals: 0,
      pieRadius: "45%",
      theme: "fusion",
    },
    data,
  };
  const chartConfigs = {
    type: "pie3d",
    width: 400,
    height: 400,
    dataFormat: "json",
    dataSource: chartData,
  };

  return <ReactFC {...chartConfigs} />;
};
export default ChartComponents;
