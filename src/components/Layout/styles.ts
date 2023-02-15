import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-width: 100%;
  width: 100vw;
  height: 100vh;

  & > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 50px;

    span {
      font-size: 1.2rem;
    }

    img {
      height: 40px;
      border-radius: 50%;
    }

    .user {
      display: flex;
      align-items: center;
      column-gap: 16px;
    }
  }
`;
