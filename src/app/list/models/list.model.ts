export interface List {
  name: string;
  isCurrent: boolean;
  items: ListItem[];
}

export interface ListItem {
  text: string;
  isHidden: boolean;
}
