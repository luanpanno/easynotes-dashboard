export type Collection = {
  id: number;
  name: string;
  email: string;
  token: string;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCollection = {
  name: string;
};

export type UpdateCollection = {
  name: string;
};
