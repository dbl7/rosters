export interface List {
  name: string;
  items: ListItem[];
}

export interface ListItem {
  text: string;
  isHidden: boolean;
}
