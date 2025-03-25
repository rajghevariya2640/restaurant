import React from "react";
import { Button } from "react-bootstrap";
import { RightArrow } from "./Icon";
import { Link } from "react-router-dom";

const BButton = ({ ...props }) => {
  return (
    <>
        <Button as={props.link ? Link : Button} {...props}>
          {props.children}
          {props.icon && <RightArrow />}
        </Button>
    </>
  );
};

export default BButton;
