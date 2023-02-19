import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  .active {
    transition: all 200ms;
    background-color: #646cff;
    color: white;
  }
`;
