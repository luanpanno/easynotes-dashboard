export type User = {
  id: number;
  name: string;
  email: string;
  token: string;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
};

export type LoginFields = {
  email: string;
  password: string;
};

export type SignupFields = {
  name: string;
  email: string;
  password: string;
  birthdate: string;
};

export type LoginResponse = User & {
  token: string;
};

export type DecodedToken = {
  user: User;
  iat: number;
  exp: number;
};
