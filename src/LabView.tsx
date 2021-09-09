import React from "react";
import {
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  TableHeader,
  TableCell,
} from "carbon-components-react";
import * as D3 from "d3";
import * as uuid from "uuid";

export default function LabView(props: {
  data: D3.DSVRowArray<string>;
  metadata: any;
}) {
  if (props.data == null) {
    return <div>No data</div>;
  }

  if (props.metadata == null) {
    return <div>No metadata</div>;
  }

  // We have the data & metadata, let's balance la purée!
  return (
    <div>
      <TableContainer title="Raw data">
        <Table>
          <TableHead>
            <TableRow>
              {props.metadata.map((header: any) => (
                <TableHeader>{header.header}</TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row: any) => (
              <TableRow key={uuid.v4()}>
                {props.metadata.map((header: any) => (
                  <TableCell key={uuid.v4()}>
                    {console.log(row[header.key])}
                    {row[header.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
