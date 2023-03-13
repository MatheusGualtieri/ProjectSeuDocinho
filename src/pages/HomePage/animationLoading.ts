import styled from "styled-components";

export const StyledLoading = styled.p`
  animation: blink 1s ease-in-out infinite;
  font-size: 1.2rem;
  font-weight: 700;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
