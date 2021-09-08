import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
} from "carbon-components-react";

export default function HeaderView() {
  return (
    <Header aria-label="dṛṣṭi">
      <HeaderName href="#" prefix="jgp.ai">
        dṛṣṭi
      </HeaderName>
      <HeaderNavigation aria-label="dṛṣṭi"></HeaderNavigation>
    </Header>
  );
}
