import React, { Component } from 'react';
import './index.scss';
import './App.css';
import { Accordion, AccordionItem, Button, Tab, Tabs } from 'carbon-components-react';
import logo from './jgpai.svg';
import * as D3 from 'd3';
import MetadataView from './MetadataView';

//import Button from 'carbon-components-react';
//import Tabs from 'carbon-components-react';
//import Tab from 'carbon-components-react';

const csvUrl = '/data.csv';
const metadataUrl = '/metadata.json';
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
        D3.csv(csvUrl).then(data => {
            vizData = data;
            console.log('New load' + data);
        }
        );

        return (
            <div>
                <div className="App">
                    <Tabs>
                        <Tab id="tab-1" label="Smart Viz">
                            <p>Content for first tab goes here.</p>
                        </Tab>
                        <Tab id="tab-2" label="Raw data">
                            <p>Content for second tab goes here.</p>
                            <Button>With a button</Button>
                        </Tab>
                        <Tab
                            id="tab-3"
                            label="Raw payload"
                            title="Raw data as downloaded from the server">
                            <p>Content for third tab goes here.</p>
                        </Tab>
                        <Tab
                            id="tab-4"
                            label="Meta"
                            title="Meta data about the downloaded data">
                            <p></p>
                            <MetadataView data={vizData} />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default App;
