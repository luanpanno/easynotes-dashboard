import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 16px;
  width: 600px;

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    border-bottom: 1px solid #ccc;
    margin-bottom: 16px;
    padding: 16px 24px;

    h2 {
      margin: 0;
    }

    button {
      background-color: transparent;
      border: none;
      font-size: 1.5rem;
      padding: 8px;
      height: 40px;
      width: 40px;
    }
  }

  & > main {
    padding: 16px 24px 32px;

    input {
      width: 100%;
    }
  }

  .form-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 8px;
    margin-top: 32px;
  }
`;
