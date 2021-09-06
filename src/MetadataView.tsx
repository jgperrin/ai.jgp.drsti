import { ScalesTipped32, Row32, Column32 } from '@carbon/icons-react';
import { Tile, Grid, Row, Column } from 'carbon-components-react';
import * as D3 from 'd3';

function MetadataView(props: { data: D3.DSVRowArray<string> }) {
    if (props.data == null) {
        return (
            <div>No data</div>
        )
    }

    let colCount = props.data.columns.length;
    let recordCount = props.data.length;
    let size = Math.round(D3.csvFormat(props.data).length * 10 / 1024) / 10;

    return (
        <div>
            <Grid narrow>
                <Row condensed>
                    <Column><Tile>
                        <ScalesTipped32 />
                        <br />
                        <br />
                        <h1>{size}</h1>
                        <br />KB
                    </Tile></Column>
                    <Column><Tile>
                        <Row32 />
                        <br />
                        <br />
                        <h1>{recordCount}</h1>
                        <br />records
                    </Tile></Column>
                    <Column><Tile>
                        <Column32 />
                        <br />
                        <br />
                        <h1>{colCount}</h1>
                        <br />columns
                    </Tile></Column>
                </Row>
            </Grid>
        </div>
    )
}

export default MetadataView;
