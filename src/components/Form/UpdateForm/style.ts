import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  h2 {
    width: 100%;
  }
  @media (min-width: 800px) {
    width: 50%;
  }
`;
