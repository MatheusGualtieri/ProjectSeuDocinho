import styled from "styled-components";
export const StyleCart = styled.div`
  position: absolute;
  width: 100%;
  height: 300%;
  margin-top: 80px;
  background-color: var(--grey-3);
  div {
    .close {
      color: var(--color-image);
      font-size: 30px;
    }
    background-color: var(--grey-2);
    margin: 20px;
    padding-bottom: 25px;
    header {
      display: flex;
      width: 100%;
      -webkit-box-align: center;
      align-items: center;
      padding: 0px 10px;
      height: 65px;
      background-color: var(--grey-4);
      flex-direction: row-reverse;
      justify-content: space-around;
    }
    h1 {
      color: var(--color-image);
    }
  }
  span {
    margin-top: 55px;
    line-height: 48px;
    color: var(--color-add-product);
  }
  ul {
    padding: 25px 0 25px 0;
    margin: 0 15px 0 15px;
    width: auto;
    max-height: 350px;
    overflow-y: scroll;
    gap: 20px;
    display: flex;
    flex-direction: column;
    border-bottom: solid 2px var(--grey-4);
    li {
      display: flex;
      width: auto;
      align-items: center;
      border-radius: 5px;
      background-color: var(--grey-3);
      border: 2px solid var(--grey-4);
      img {
        width: 70px;
        height: 70px;
        border-radius: var(--border-radius-1);
        margin-right: 15px;
      }
      div {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        gap: 15px;
        background-color: var(--grey-3);
        padding: 0;

        small {
          color: var(--color-add-product);
        }
        div {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background-color: var(--grey-3);
          padding: 0;
          h4 {
            color: var(--color-add-product);
          }

          button {
            background-color: transparent;
            border: 1px solid var(--color-add-product);
            height: auto;
            width: auto;
            border-radius: 3px;
            padding: 2px 3px ;
            margin-right: 10px;
            color: var(--color-add-product);
          }
          button:hover {
            color: var(--grey-100);
            text-decoration-line: underline;
          }
        }
      }
    }
  }
  footer {
    padding: 25px 10px 25px 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 23px;

    .someTotal {
      margin: 0;
      padding: 0 8px 0 4px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-weight: 600;
        font-size: 1rem;

      }
      samp {
        color: var(--color-add-product);
        font-weight: 600;
        font-size: 1rem;

      }
    }
    .footerButton {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 45px;
      flex-direction: row;
      button {
        height: 35px;
        padding: 0 10px;
        width: auto;
        border-radius: 5px;
        font-weight: 600;
        background-color: var(--grey-2);
        font-size: 1rem;
      }
      .whatsWapp {
        border: 1px solid var(--color-sucess);
        color: var(--color-sucess);
      }
      .whatsWapp:focus{
        color: var(--grey-2);
        background-color: var(--color-sucess);
      }
      .remuv {
        border: 1px solid var(--color-negative);
        color: var(--color-negative);
      }
      .remuv:focus{
        color: var(--grey-2);
        background-color: var(--color-negative);
      }
    }
  }
  @media screen and (min-width:800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110%;
    background-color: rgba(33,37,41,0.80);
    div {
      width: 550px;
    }
  }
`;
