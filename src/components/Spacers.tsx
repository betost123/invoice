import * as React from "react";
import { styled } from "styled-components";

export const Spacer = styled.div<{ spacing: number }>`
  width: ${(props) => `${props.spacing}rem`};
`;

export const HorizontalSpacer = styled.div<{ spacing: number }>`
  height: ${(props) => `${props.spacing}rem`};
`;
