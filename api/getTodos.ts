import axios from "axios";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getTodos = async () => {
  const response = await axios.get<[Todo]>("http://localhost:4000/todos");
  return response.data;
};

export default getTodos;
