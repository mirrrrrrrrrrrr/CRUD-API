import { v4 as uuid } from "uuid";

interface IUser {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

export const Users: IUser[] = [
  {
    id: uuid(),
    username: "name_1",
    age: 22,
    hobbies: ["reading", "writing", "watching TV"],
  },
  {
    id: uuid(),
    username: "name_2",
    age: 25,
    hobbies: ["reading", "writing", "watching TV"],
  },
];
