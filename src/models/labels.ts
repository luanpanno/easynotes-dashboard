export type Label = {
  id: number;
  name: string;
  email: string;
  token: string;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateLabel = {
  name: string;
};

export type UpdateLabel = {
  name: string;
};
