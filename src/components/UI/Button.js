import React from "react";
import styled from "styled-components";

function Button(props) {
  return (
    <ButtonStyled className={props.className}>{props.children}</ButtonStyled>
  );
}

export default Button;

const ButtonStyled = styled.button``;
