import styled from "styled-components";

export const StyledRegister = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
  margin: auto;

  width: 100%;
  max-width: 320px;
  height: 80vh;


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
    padding: 0 15px;
    gap: 8px;
  }
  label{
    font-size: 13px;
    font-weight: 400;
    padding-left: 2px;
  }
`;
