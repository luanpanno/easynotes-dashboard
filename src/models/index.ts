export type Nullable<T> = T | null;

export type ChildrenProp = {
  children?: React.ReactNode;
};

export type PropsWithChildren<T> = T & ChildrenProp;
