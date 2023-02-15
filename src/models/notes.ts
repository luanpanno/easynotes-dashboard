export type Note = {
  id: number;
  name: string;
  email: string;
  token: string;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateNote = {
  name: string;
};

export type UpdateNote = {
  name: string;
};
