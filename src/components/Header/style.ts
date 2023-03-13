import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  align-items: center;
  top: 0;
  width: 100%;
  min-height: 72px;
  padding: 10px;

  background-color: var(--color-primary);
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);

  .conteinerGeral {
    width: 100%;
    max-width: 1200px;
  }

  .color {
    background-color: var(--color-primary);
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 500px) {
    display: flex;
    justify-content: center;

    .color {
      display: flex;

      align-items: flex-end;
    }
  }

  .conteinerImageMenu {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .conteinerDropDown {
    display: flex;
    flex-direction: column;
  }

  .imagesMenu {
    display: flex;
    align-items: center;

    gap: 24px;
    margin-bottom: 10px;

    .image {
      width: 20px;
      height: 20px;

      cursor: pointer;

      color: var(--color-image);
      transition: 0.5s;
    }
    .image:hover {
      filter: brightness(1.3);
    }
  }
`;
