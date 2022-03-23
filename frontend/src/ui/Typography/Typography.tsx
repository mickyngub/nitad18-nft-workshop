import React from "react";
import styled from "styled-components";

interface Props {
  fontFamily?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  color?: string;
}
export const TitleH1 = styled.h1`
  font-family: ${(props: Props) => props.fontFamily};
  font-size: ${(props: Props) => props.fontSize};
  font-style: ${(props: Props) => props.fontStyle};
  font-weight: ${(props: Props) => props.fontWeight};
  color: ${(props: Props) => props.color};
`;
export const TitleH2 = styled.h2`
  font-family: ${(props: Props) => props.fontFamily};
  font-size: ${(props: Props) => props.fontSize};
  font-style: ${(props: Props) => props.fontStyle};
  font-weight: ${(props: Props) => props.fontWeight};
  color: ${(props: Props) => props.color};
`;
export const TitleH3 = styled.h3`
  font-family: ${(props: Props) => props.fontFamily};
  font-size: ${(props: Props) => props.fontSize};
  font-style: ${(props: Props) => props.fontStyle};
  font-weight: ${(props: Props) => props.fontWeight};
  color: ${(props: Props) => props.color};
`;
export const TitleH4 = styled.h4`
  font-family: ${(props: Props) => props.fontFamily};
  font-size: ${(props: Props) => props.fontSize};
  font-style: ${(props: Props) => props.fontStyle};
  font-weight: ${(props: Props) => props.fontWeight};
  color: ${(props: Props) => props.color};
`;
export const TitleH5 = styled.h5`
  font-family: ${(props: Props) => props.fontFamily};
  font-size: ${(props: Props) => props.fontSize};
  font-style: ${(props: Props) => props.fontStyle};
  font-weight: ${(props: Props) => props.fontWeight};
  color: ${(props: Props) => props.color};
`;
export const TitleH6 = styled.h6`
  font-family: ${(props: Props) => props.fontFamily};
  font-size: ${(props: Props) => props.fontSize};
  font-style: ${(props: Props) => props.fontStyle};
  font-weight: ${(props: Props) => props.fontWeight};
  color: ${(props: Props) => props.color};
`;
export const Paragraph = styled.p`
  font-family: ${(props: Props) => props.fontFamily};
  font-size: ${(props: Props) => props.fontSize};
  font-style: ${(props: Props) => props.fontStyle};
  font-weight: ${(props: Props) => props.fontWeight};
  color: ${(props: Props) => props.color};
`;
