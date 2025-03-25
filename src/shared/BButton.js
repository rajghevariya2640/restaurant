import React from "react";
import { Button } from "react-bootstrap";
import { RightArrow } from "./Icon";

const BButton = ({ ...props }) => {
  return (
    <Button>
      {props.children}
      {props.icon && <RightArrow />}
    </Button>
  );
};

export default BButton;
