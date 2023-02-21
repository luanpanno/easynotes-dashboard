import styled from 'styled-components';

export const LabelsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  column-gap: 32px;
  color: black;
`;

export const LabelsCard = styled.div`
  a {
    border-radius: 8px;
    background-color: #fff;
    width: 200px;
    height: 80px;
    display: inline-block;
    padding: 8px 16px;
  }
`;
