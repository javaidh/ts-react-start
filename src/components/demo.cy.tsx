import * as React from "react";
import { Demo } from "./demo";

describe("<Demo>", () => {
  it("mounts", () => {
    cy.mount(<Demo />);
  });
});
