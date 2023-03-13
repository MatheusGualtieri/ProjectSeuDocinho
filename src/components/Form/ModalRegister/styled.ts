import styled from "styled-components";

export const StyledRegister = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
  margin: auto;

  width: 100%;
  max-width: 300px;
  height: 68vh;
  top: 28%;
  left: 3%;

  background-color: var(--grey-2);
  z-index: 1001;

  .box {
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
    margin-top: -30px;
  }
  header > span{
    color: var(--grey-0);
    font-size: 20px;
    margin-top: -10px;
    cursor: pointer;
  }
  header > h2{
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
  label{
    font-size: 13px;
    font-weight: 400;
    padding-left: 2px;
  }
  .buttonEnviar{
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
  @media (min-width: 375px){
    left: 10%;
  }
  @media (min-width: 425px){
    top: 26%;
    left: 15%;
    height: 70vh;
  }
  @media (min-width: 768px) {
    top: 26%;
    left: 30%;
  }
  @media (min-width: 1024px) {
    top: 15%;
    left: 35%;
    height: 65vh;
    form{
      padding: 0 8px;
    }
    
  }
  @media (min-width: 1440px) {
    top: 15%;
    left: 40%;
    height: 59vh;
  }
`;
