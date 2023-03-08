import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem;
  @media (min-width: 800px) {
    max-width: 80%;
  }
`;
