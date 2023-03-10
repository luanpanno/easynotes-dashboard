export type Note = {
  id: number;
  name: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  content?: string;
  labelId?: number;
  collectionId?: number;
};

export type CreateNote = {
  name: string;
  collectionId?: number;
};

export type UpdateNote = {
  name?: string;
  content?: string;
  collectionId?: number;
};

export type NotesByCollection = {
  [collectionId: number]: Note[];
};
