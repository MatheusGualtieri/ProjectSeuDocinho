import styled from "styled-components";

export const StyledDropDownSearch = styled.div`
  padding-top: 0.5rem;
  input {
    height: 40px;

    border-radius: 5px;

    border: none;
    margin: 5px;

    background-color: var(--color-tertiary);
    color: var(--color-image);
  }

  button {
    width: 43px;
    height: 40px;

    border: none;

    border-radius: 5px;
    background-color: var(--color-tertiary);

    color: var(--color-image);
    transition: 0.5s;
  }

  button:hover {
    filter: brightness(1.1);
  }
`;
