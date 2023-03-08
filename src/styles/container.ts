import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 800px) {
    max-width: 85%;
  }
`;
