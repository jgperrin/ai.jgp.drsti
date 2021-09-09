import React from "react";
import { LineChart } from "@carbon/charts-react";
import { DataProps } from "./DataProps";
import * as D3 from "d3";

type GraphDot = { group: string; x: Date | number; y: number };

export default class ChartView extends React.Component<DataProps, {}> {
  data: D3.DSVRowArray<string>;
  metadata: any;
  datax: GraphDot[] = [];

  constructor(props: any) {
    super(props);
    this.data = props.data;
    this.metadata = props.metadata;
  }

  options: any = {
    title: "",
    axes: {
      bottom: {
        title: "Month of",
        mapsTo: "x",
        scaleType: "time",
      },
      left: {
        mapsTo: "y",
        title: "Value",
        max: 10000,
      },
    },
    experimental: true,
    zoomBar: {
      top: {
        enabled: true,
      },
    },
    //curve: "curveMonotoneX",
    height: "600px",
  };

  private prerender(): React.ReactElement {
    if (this.data == null) {
      return <div>No data</div>;
    }

    if (this.metadata == null) {
      return <div>No metadata</div>;
    }

    let rowId: number = 0;
    let metaX = this.metadata[0].key; // value on X
    let metaY = this.metadata[1].key; // value on Y
    let metaGroup: string = this.metadata[1].header; // header of col
    console.log(metaX + "/" + metaY + "/" + metaGroup);

    this.data.map((row: any) => {
      let x: any = row[this.metadata[0].key];
      let y: number = row[this.metadata[1].key];
      this.datax.push({ group: metaGroup, x: x, y: y });
      rowId++;
    });
    console.log("Processed " + rowId + " rows");

    return (
      <LineChart data={this.datax} options={this.options}></LineChart>
    );
  }

  render = () => this.prerender();
}
