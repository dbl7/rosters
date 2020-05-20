export interface List {
  id?: string;
  name: string;
  items: ListItem[];
  isActive?: boolean;
}

export interface ListItem {
  text: string;
  isHidden: boolean;
}
