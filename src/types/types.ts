export type Visitor = {
  username: string;
  email: string;
};

export const emptyValuesVisitorForm = (): Visitor => ({
  username: '',
  email: '',
});
