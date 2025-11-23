import React from "react";
import {FormattedMessage} from "react-intl";
import SimpleLocalize from "../SimpleLocalize";

function Header(props) {
  // const language = props.pageContext.language;
  return (
    <SimpleLocalize {...props}>
      <h1>
        <FormattedMessage
          id="hello-world"
          defaultMessage="Hello World!"
        />
      </h1>

    </SimpleLocalize>
  );
}

export default Header
