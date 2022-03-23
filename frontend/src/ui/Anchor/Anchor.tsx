import styled from "styled-components";

interface Props {
  href?: string;
}

export const Anchor: React.FC<Props> = ({ href, children }) => {
  return (
    <StyledAnchor href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledAnchor>
  );
};
const StyledAnchor = styled.a`
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
