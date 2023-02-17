import styled from 'styled-components';

export const NotesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 32px;
  height: 60vh;
  overflow: scroll;
`;

export const NoteCard = styled.div`
  border-radius: 8px;
  background-color: #fff;
  display: inline-block;
  padding: 16px;
  color: black;
  display: flex;
  align-items: center;
  column-gap: 16px;

  input {
    width: 100%;
  }

  span {
    width: 100%;
  }
`;
