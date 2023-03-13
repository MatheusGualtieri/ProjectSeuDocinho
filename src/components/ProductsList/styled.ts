import styled from "styled-components";

export const StyledProductList = styled.li`
  margin: 0 auto;
  width: 288px;
  height: 402px;

  border-radius: 5px;

  background-color: var(--color-primary);

  img {
    width: 100%;
    height: 130px;

    border-radius: 5px 5px 0px 0px;
  }

  P {
    font-size: 1rem;
    font-weight: 700;

    color: var(--color-add-product);
  }

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 70px;
    height: 22px;

    font-size: 0.6rem;
    font-weight: 700;

    background-color: var(--color-tertiary);
    color: var(--grey-1);

    border-radius: 5px;
  }

  .conteinerInfo {
    display: flex;
    flex-direction: column;

    gap: 16px;
  }
  .conteinerInfo p:first-child {
    margin-top: 16px;
  }

  .description {
    width: 280px;
    height: 60px;

    font-size: 0 9rem;
    font-weight: 400;

    color: var(--grey-1);
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px;
  }

  span {
    font-size: 0 9rem;
    font-weight: 700;

    color: var(--color-negative);
  }

  button {
    height: 37px;

    margin: 15px;

    border-radius: 5px;
    border: 1px solid var(--color-add-product);

    background-color: var(--color-primary);
    color: var(--color-add-product);
  }

  button:hover {
    background-color: var(--color-add-product);
    color: var(--color-primary);
  }
`;
