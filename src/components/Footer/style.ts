import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  bottom: 0;
  width: 100%;
  height: 47px;

  padding: 10px;

  background-color: var(--color-primary);

  img {
    width: 100px;
    height: 30px;
  }

  .image {
    width: 20px;
    height: 20px;

    color: var(--color-image);
  }

  .footerImage {
    display: flex;
    gap: 20px;
  }
`;
