import React from "react";
import { LineChart } from "@carbon/charts-react";
import { DataProps } from "./DataProps";
import * as D3 from "d3";
import { TileAboveTheFoldContent } from "carbon-components-react";

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
        scaleType: "labels",
      },
      left: {
        mapsTo: "y",
        title: "Value",
      },
    },
    experimental: true,
    zoomBar: {
      top: {
        enabled: true,
      },
    },
    curve: "curveMonotoneX",
    height: "600px",
  };

  private prerender(): React.ReactElement {
    if (this.data == null) {
      return <div>No data</div>;
    }

    if (this.metadata == null) {
      return <div>No metadata</div>;
    }

    let colCount = this.data.columns.length;
    let metaX = this.metadata.columns[0].key; // value on X
    let metaY = this.metadata.columns[1].key; // value on Y
    let metaGroup: string = this.metadata.columns[1].header; // header of col
    console.log(metaX + "/" + metaY + "/" + metaGroup);

    this.options.title = this.metadata.title;
    this.options.axes["bottom"].title = this.metadata.xtitle;
    this.options.axes["bottom"].scaleType = this.metadata.xscale;
    this.options.axes["left"].title = this.metadata.ytitle;

    let rowId: number = 0;
    this.data.map((row: any) => {
      let x: Date = row[this.metadata.columns[0].key]; // TODO issue with date
      for (let i: number = 1; i < colCount; i++) {
        if (row[this.metadata.columns[i].key] != null && row[this.metadata.columns[i].key] != "") {
          let y: number = +row[this.metadata.columns[i].key];
          let metaGroup: string = this.metadata.columns[i].header;
          this.datax.push({ group: metaGroup, x: x, y: y });
        }
      }
      rowId++;
    });
    console.log("Processed " + rowId + " rows");

    return <LineChart data={this.datax} options={this.options}></LineChart>;
  }

  render = () => this.prerender();
}
