import React from "react";
import "./app.scss";
import { Tab, Tabs, Loading } from "carbon-components-react";
import * as D3 from "d3";
import HeaderView from "./HeaderView";
import MetadataView from "./MetadataView";
import RawPayloadView from "./RawPayloadView";
import RawDataView from "./RawDataView";
import LabView from "./LabView";

// What are we downloading & from where
const csvUrl = "/data.csv";
const metadataUrl = "/metadata.json";

// Main application
export default class App extends React.Component {
  drstiData!: D3.DSVRowArray<string>;
  drstiMetadata!: any;

  constructor(props: any) {
    super(props);
    // Assigns the changed data to the usable data for all
    D3.csv(csvUrl).then((data) => {
      this.drstiData = data;
      console.log("New data\n" + D3.csvFormat(this.drstiData));
      this.setState({ data: true });
    });

    // Reads the metadata
    fetch(metadataUrl)
      .then((response) => {
        return response.json();
      })
      .then((metadata) => {
        console.log("New metadata\n" + JSON.stringify(metadata));
        this.drstiMetadata = metadata;
        this.setState({ metadata: true });
      });
  }

  render() {
    // Renders loading if data or metadata are not here
    if (this.drstiMetadata == null || this.drstiData == null) {
      if (this.drstiMetadata == null) {
        console.log("[warn] Metadata is null");
      }
      if (this.drstiData == null) {
        console.log("[warn] Data is null");
      }

      return (
        <div className="App">
          <HeaderView />
          <Loading description="Loading data" withOverlay={true} />
        </div>
      );
    }

    // Everything should be here for full rendering
    return (
      <div className="App">
        <HeaderView />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <Tabs>
          <Tab id="tab-1" label="Visualization">
            <p></p>
            <LabView data={this.drstiData} metadata={this.drstiMetadata} />
          </Tab>
          <Tab
            id="tab-2"
            label="Raw data"
            title="Raw data in a table as downloaded from the server"
          >
            <p></p>
            <RawDataView data={this.drstiData} metadata={this.drstiMetadata} />
          </Tab>
          <Tab
            id="tab-3"
            label="Raw payload"
            title="Raw data (as the payload) as downloaded from the server"
          >
            <p></p>
            <RawPayloadView data={this.drstiData} />
          </Tab>
          <Tab
            id="tab-4"
            label="Meta"
            title="Meta data about the downloaded data"
          >
            <p></p>
            <MetadataView data={this.drstiData} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
