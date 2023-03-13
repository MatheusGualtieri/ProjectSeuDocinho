import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  @media (min-width: 800px) {
    height: 88vh;
  }
`;
export const StyledDiv = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const StyledLine = styled.div`
  @media (min-width: 800px) {
    margin-top: 2rem;
    height: 570px;
    border-left: 3px solid var(--color-primary);
  }
`;
