import React, { Component } from "react";
import "./index.scss";
import "./App.css";
import { Tab, Tabs } from "carbon-components-react";
import logo from "./jgpai.svg";
import * as D3 from "d3";
import HeaderView from "./HeaderView";
import MetadataView from "./MetadataView";
import RawPayloadView from "./RawPayloadView";

// What are we downloading & from where
const csvUrl = "/data.csv";
const metadataUrl = "/metadata.json";

var vizData: D3.DSVRowArray<string>;

class App extends Component {
  // // Reads the metadata
  // fetch(metadataUrl)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (jsonPayload) {
  //     //columns = jsonPayload
  //   });

  render() {
    // Assigns the changed data to the usable data for all
    D3.csv(csvUrl).then((data) => {
      vizData = data;
      console.log("New load!\n" + data);
    });

    return (
      <div className="App">
        <HeaderView />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <Tabs>
          <Tab id="tab-1" label="Visualization">
            <p></p>
          </Tab>
          <Tab id="tab-2" label="Raw data">
            <p></p>
          </Tab>
          <Tab
            id="tab-3"
            label="Raw payload"
            title="Raw data as downloaded from the server"
          >
            <p></p>
            <RawPayloadView data={vizData} />
          </Tab>
          <Tab
            id="tab-4"
            label="Meta"
            title="Meta data about the downloaded data"
          >
            <p></p>
            <MetadataView data={vizData} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
