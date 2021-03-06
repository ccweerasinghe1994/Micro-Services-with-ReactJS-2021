import axios from "axios";
const url = `https://jsonplaceholder.typicode.com/todos/1`;

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as ToDo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logToDo(id, title, completed);
});

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The ToDo with the id  ${id}
  has a title of ${title}
  is it finished ${completed}
  `);
};
