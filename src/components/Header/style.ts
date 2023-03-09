import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  align-items: center;

  width: 100%;
  min-height: 72px;
  padding: 10px;

  background-color: var(--color-primary);
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);

  .color {
    background-color: var(--color-primary);
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    height: 37px;

    border-radius: 5px;
    border: 1px solid var(--color-add-product);

    background-color: var(--color-primary);
    color: var(--color-add-product);
  }

  button:hover {
    background-color: var(--color-add-product);
    color: var(--color-primary);
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
    }
  }
`;
