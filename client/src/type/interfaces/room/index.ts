export interface IList extends Array<IListItems>{};

interface IListItems {
  name: string,
  size: number
}