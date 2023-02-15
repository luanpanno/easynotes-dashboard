export type CollectionId = number;

export type Collection = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  labelId?: number;
};

export type CreateCollection = {
  name: string;
};

export type UpdateCollection = {
  name: string;
};
