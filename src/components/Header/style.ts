import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  min-height: 72px;
  padding: 10px;

  background-color: var(--color-primary);
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 500px) {
    display: flex;
    align-items: flex-end;
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

      color: var(--color-image);
    }
  }
`;
