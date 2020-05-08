export interface List {
  id?: string;
  name: string;
  items: ListItem[];
}

export interface ListItem {
  text: string;
  isHidden: boolean;
}
