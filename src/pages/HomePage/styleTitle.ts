import styled from "styled-components";

export const StyledTitle = styled.div`
  background-color: var(--color-tertiary);

  .whatsapp {
    position: fixed;
    top: 210px;
    right: 16px;

    width: 30px;
    height: 30px;

    color: #a4c639;

    cursor: pointer;
    transition: 0.5s;
  }
  .whatsapp:hover {
    filter: brightness(1.3);
  }
  p {
    padding: 2.5rem 0px 2.5rem 0px;

    font-size: 1rem;
    font-weight: 700;

    color: var(--color-image);
  }
`;
