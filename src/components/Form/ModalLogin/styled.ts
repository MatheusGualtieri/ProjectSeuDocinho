import styled from "styled-components";

export const StyledLoginModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
  margin: auto;

  width: 100%;
  max-width: 320px;
  height: 45vh;
  top: 25%;
  left: 30%;

  background-color: var(--grey-2);
  z-index: 1001;

  .boxLogin {
    width: 100%;
    max-width: 320px;
    background-color: var(--grey-2);
  }
  header {
    background-color: var(--grey-3);
    padding: 12px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -20px;
  }
  header > span {
    color: var(--grey-0);
    font-size: 20px;
    margin-top: -10px;
    cursor: pointer;
  }
  header > h2 {
    color: var(--grey-0);
    font-size: 14px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    padding: 0 15px;
    gap: 8px;
  }
  label {
    font-size: 13px;
    font-weight: 400;
    padding-left: 2px;
  }
  h3 {
    color: var(--grey-0);
    font-size: 14px;
  }
  .cadastrar {
    padding: 0.5rem 7rem;
    background-color: var(--grey-0);
    color: var(--grey-4);
    font-size: 14px;
    font-weight: 700;
    border: 1px solid var(--grey-0);
    border-radius: var(--border-radius);
    transition: 0.5s;

    :hover {
      background-color: var(--grey-0);
      color: var(--color-tertiary);
    }
  }
`;
