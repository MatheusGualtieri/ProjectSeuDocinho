import styled from "styled-components";
export const StyledInputPassword = styled.input`
  width: 100%;
  padding: 0.5rem 01rem;
  background-color: var(--grey-3);
  color: var(--grey-0);
  border: 1px solid var(--grey-1);
  border-radius: var(--border-radius);
  font-size: var(--font-size-1);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const StyledContainerInput = styled.div`
  display: flex;
  position: relative;
  button {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    top: 1rem;
    z-index: 1;
  }
`;
