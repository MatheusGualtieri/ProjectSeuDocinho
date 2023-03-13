import styled from "styled-components";

export const StyledLoginModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
  margin: auto;

  width: 100%;
  max-width: 300px;
  height: 50vh;
  top: 25%;
  left: 3%;


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
    padding: 0 8px;
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
  .buttonEnviar {
    padding: 0.5rem 7.4rem;
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
  }
  .cadastrar {
    padding: 0.5rem 6.8rem;
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
  @media (min-width: 375px){
    left: 10%;
  }
  @media (min-width: 425px){
    left: 15%;
  }
  @media (min-width: 768px) {
    left: 30%;
  }
  @media (min-width: 1024px) {
    width: 100%;
    max-width: 320px;
    height: 37vh;
    top: 15%;
    left: 35%;
    form{
      padding: 0 15px;
    }
    
  }
  @media (min-width: 1440px) {
    width: 100%;
    max-width: 320px;
    height: 32vh;
    top: 15%;
    left: 40%;
  }

`;
