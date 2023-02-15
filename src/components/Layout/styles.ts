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
    padding: 0 150px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);

    a {
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

      & > div {
        display: flex;
        align-items: center;
        column-gap: 8px;
        margin-right: 16px;
      }
    }
  }

  & > main {
    padding: 0 150px;
  }
`;
