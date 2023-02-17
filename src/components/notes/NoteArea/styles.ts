import styled from 'styled-components';

export const NoteAreaContainer = styled.div`
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5fr; */
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  textarea {
    height: 100%;
  }
`;
