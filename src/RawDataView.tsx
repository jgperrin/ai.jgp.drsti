import React from "react";
import { ScalesTipped32, Row32, Column32 } from "@carbon/icons-react";
import {
  DataTable,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  TableHeader,
  TableCell,
  DataTableHeader,
  DataTableRow,
  DataTableCell,
} from "carbon-components-react";
import * as D3 from "d3";
import * as uuid from "uuid";

export default function RawDataView(props: {
  data: D3.DSVRowArray<string>;
  metadata: any;
}) {
  if (props.data == null) {
    return <div>No data</div>;
  }

  if (props.metadata == null) {
    return <div>No metadata</div>;
  }

  //rowData = props.data;
  //console.log(JSON.stringify(rowData));

  console.log("Meta in table\n" + JSON.stringify(props.metadata));
  let headerData = props.metadata;

  let field = "Period";
  //  props.data.forEach(({value}:{value:D3.DSVRowString<string>}) => {
  props.data.forEach((value) => {
    console.log(value);
    console.log(value.Period);
    console.log(value["Period"]);
    console.log(value[field]);
  });

  let rowData = JSON.parse(JSON.stringify(props.data));
  rowData.forEach((element: any) => {
    console.log("rowData");
    console.log(element);
    console.log(element["Period"]);
  });

  return (
    <div><p>{uuid.v4()}</p>
      <DataTable rows={rowData} headers={headerData}>
        {({
          rows,
          headers,
          getHeaderProps,
          getTableProps,
        }: {
          rows: any;
          headers: any;
          getHeaderProps: any;
          getTableProps: any;
        }) => (
          <TableContainer title="Raw data">
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header: any) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {console.log("TB")}
                {rowData.forEach((element: any) => (
                   <TableRow key={uuid.v4()}>
                  <div>row</div>
                     {console.log(element)}
                     <TableCell>a</TableCell>
                     <TableCell>b</TableCell>
{
                  //   {(<div>row</div>)}
                  //   {headers.map((header: any) => (
                  //     <TableCell key={uuid.v4()}>{(<div>xyz</div>)}
                  //       {console.log(element[header.key])}
                  //       {element[header.key]}
                  //     </TableCell>
                  //   ))}
}
                   </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </div>
  );
}

// {rows.map(({ row }: { row: DataTableRow }) => (
//   <TableRow key={uuid.v4()}>

//   {headers.map((header: any) => (
//     <TableCell>
//       {row[header.key]}
//     </TableCell>
//   ))}

//   </TableRow>
// ))}

/* { <DataTable rows={rowData} headers={headerData}>
        {({ rows, headers, getHeaderProps, getTableProps }) => (
          <TableContainer title="DataTable">
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable> } */

//   //row.cells.map(({ cell }: { cell: DataTableCell }) => (
//   <TableCell key={uuid.v4()}>
//     {JSON.stringify(row) + "="}
//   </TableCell>
//   //))
// }
/* <DataTable rows={rowData} headers={headerData}>
{({
  rows,
  headers,
  getHeaderProps,
  getTableProps,
}: {
  rows: any;
  headers: any;
  getHeaderProps: any;
  getTableProps: any;
}) => (
  <TableContainer title="Raw data">
    <Table {...getTableProps()}>
      <TableHead>
        <TableRow>
          {headers.map((header: any) => (
            <TableHeader {...getHeaderProps({ header })}>
              {header.header}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
    </Table>
  </TableContainer>
)}
</DataTable> */
