import { ScalesTipped32, Row32, Column32 } from "@carbon/icons-react";
import { CodeSnippet } from "carbon-components-react";
import * as D3 from "d3";

export default function RawPayloadView(props: {
  data: D3.DSVRowArray<string>;
}) {
  if (props.data == null) {
    return <div>No data</div>;
  }

  return (
    <div>
      <CodeSnippet type="multi" feedback="Copied to clipboard">
        {D3.csvFormat(props.data)}
      </CodeSnippet>
    </div>
  );
}
