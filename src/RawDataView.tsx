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
} from "carbon-components-react";
import * as D3 from "d3";

const headerData = [
  {
    header: "Name",
    key: "Period",
  },
  {
    header: "Protocol",
    key: "Total"
  },
];

export default function RawDataView(props: { data: D3.DSVRowArray<string> }) {
  if (props.data == null) {
    return <div>No data</div>;
  }

  return (
    <div>
      <DataTable rows={JSON.parse(props.data.toString())} headers={headerData}>
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
      </DataTable>
    </div>
  );
}
