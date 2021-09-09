import React from "react";
import ReactDOM from "react-dom";
import { LineChart } from "@carbon/charts-react";
import { DataProps } from "./DataProps";
import * as D3 from "d3";

import "@carbon/charts/styles.css";
import { JsxElement } from "typescript";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./plex-and-carbon-components.css";

export default class ChartView extends React.Component<DataProps, {}> {
  data: D3.DSVRowArray<string>;
  metadata: any;
  datax: any;

  constructor(props: any) {
    super(props);
    this.data = props.data;
    this.metadata = props.metadata;
  }

  // datax: any = [
  //   {
  //     group: "Dataset 1",
  //     date: "2019-01-01",
  //     value: 500,
  //   },
  //   {
  //     group: "Dataset 1",
  //     date: "2019-01-05T05:00:00.000Z",
  //     value: 65000,
  //     surplus: 330380968.156472,
  //   },
  //   {
  //     group: "Dataset 1",
  //     date: "2019-01-08T05:00:00.000Z",
  //     value: null,
  //     surplus: 4371.2698290995,
  //   },
  //   {
  //     group: "Dataset 1",
  //     date: "2019-01-13T05:00:00.000Z",
  //     value: 49213,
  //     surplus: 8654051.642981086,
  //   },
  //   {
  //     group: "Dataset 1",
  //     date: "2019-01-17T05:00:00.000Z",
  //     value: 51213,
  //     surplus: 109161960.06826693,
  //   },
  //   {
  //     group: "Dataset 2",
  //     date: "2019-01-02T05:00:00.000Z",
  //     value: 0,
  //     surplus: 18903.82121257088,
  //   },
  //   {
  //     group: "Dataset 2",
  //     date: "2019-01-06T05:00:00.000Z",
  //     value: 57312,
  //     surplus: 788712100.919931,
  //   },
  //   {
  //     group: "Dataset 2",
  //     date: "2019-01-08T05:00:00.000Z",
  //     value: 27432,
  //     surplus: 556821023.1009815,
  //   },
  //   {
  //     group: "Dataset 2",
  //     date: "2019-01-15T05:00:00.000Z",
  //     value: 70323,
  //     surplus: 318348509.51761943,
  //   },
  //   {
  //     group: "Dataset 2",
  //     date: "2019-01-19T05:00:00.000Z",
  //     value: 21300,
  //     surplus: 124757894.21351963,
  //   },
  //   {
  //     group: "Dataset 3",
  //     date: "2019-01-01T05:00:00.000Z",
  //     value: 40000,
  //     surplus: 176393773.65604326,
  //   },
  //   {
  //     group: "Dataset 3",
  //     date: "2019-01-05T05:00:00.000Z",
  //     value: null,
  //     surplus: 6873.498306249104,
  //   },
  //   {
  //     group: "Dataset 3",
  //     date: "2019-01-08T05:00:00.000Z",
  //     value: 18000,
  //     surplus: 358166990.54354864,
  //   },
  //   {
  //     group: "Dataset 3",
  //     date: "2019-01-13T05:00:00.000Z",
  //     value: 39213,
  //     surplus: 888046082.9074619,
  //   },
  //   {
  //     group: "Dataset 3",
  //     date: "2019-01-17T05:00:00.000Z",
  //     value: 61213,
  //     surplus: 618012986.1251717,
  //   },
  //   {
  //     group: "Dataset 4",
  //     date: "2019-01-02T05:00:00.000Z",
  //     value: 20000,
  //     surplus: 344868730.77524817,
  //   },
  //   {
  //     group: "Dataset 4",
  //     date: "2019-01-06T05:00:00.000Z",
  //     value: 37312,
  //     surplus: 529289300.91970927,
  //   },
  //   {
  //     group: "Dataset 4",
  //     date: "2019-01-08T05:00:00.000Z",
  //     value: 51432,
  //     surplus: 142337958.02732912,
  //   },
  //   {
  //     group: "Dataset 4",
  //     date: "2019-01-15T05:00:00.000Z",
  //     value: 25332,
  //     surplus: 270903572.70200086,
  //   },
  //   {
  //     group: "Dataset 4",
  //     date: "2019-01-19T05:00:00.000Z",
  //     value: null,
  //     surplus: 9234.539225651706,
  //   },
  // ];

  options: any = {
    title: "",
    axes: {
      bottom: {
        title: "XYZ",
        mapsTo: "date",
        scaleType: "time",
      },
      left: {
        mapsTo: "value",
        title: "Conversion rate",
      },
    },
    curve: "curveMonotoneX",
    height: "600px",
  };

  private prerender0(): React.ReactElement {
    return (
      <div/>
    );
  }
  private prerender(): React.ReactElement {
    return (
      // @ts-ignore
      <LineChart data={this.datax} options={this.options}></LineChart>
    );
  }

  render = () => this.prerender0();
}

// let rowId = 0;

// // {props.data.map((row: any) => (
// //   <TableRow key={uuid.v4()}>
// //     {props.metadata.map((header: any) => (
// //       <TableCell key={uuid.v4()}>
// //         {console.log(row[header.key])}
// //         {row[header.key]}
// //       </TableCell>
// //     ))}

// this.data.map((row: any) => {
//   console.log(row);
//   this.datax[rowId]["date"] = row[props.metadata[0].key];
//   this.datax[rowId]["group"] = props.metadata[1].header;
//   this.datax[rowId]["value"] = row[props.metadata[1].key];
//   rowId++;
// });