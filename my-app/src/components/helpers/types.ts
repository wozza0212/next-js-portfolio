export interface DigiFetchObject {
  url: string;
  listLength: number;
  initialValue: {};
}

export interface Digimon {
  name?: string;
  img?: string;
  level?: string;
}

export interface RandomFetchObject {
  url: string;
  listLength: number
  initialValue: {};
}

export type Task = {
  task: string;
  id?: string;
};

export type Tasks = Task[];
