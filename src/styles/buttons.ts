import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ButtonPrimary = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--grey-0);
  border: 1px solid var(--grey-0);
  border-radius: var(--border-radius);
  font-size: var(--font-size-2);
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

export const ButtonLink = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--grey-0);
  border: 1px solid var(--grey-0);
  border-radius: var(--border-radius);
  transition: 0.5s;
  text-decoration: none;
  font-size: var(--font-size-2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: var(--grey-0);
    color: var(--color-tertiary);
  }
`;

export const ButtonA = styled.a`
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--grey-0);
  border: 1px solid var(--grey-0);
  border-radius: var(--border-radius);
  transition: 0.5s;
  text-decoration: none;
  font-size: var(--font-size-2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: var(--grey-0);
    color: var(--color-tertiary);
  }
`;
