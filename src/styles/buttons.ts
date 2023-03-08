import styled from "@emotion/styled";

export const ButtonPrimary = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--grey-0);
  border: 1px solid var(--grey-0);
  border-radius: var(--border-radius);
  transition: 0.5s;

  :hover {
    background-color: var(--grey-0);
    color: var(--color-tertiary);
  }
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: var(--color-image);
`;
