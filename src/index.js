import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

console.log(todoList);

todoList.todos.forEach(crearTodoHtml);



console.log('todos',todoList.todos); 

//newTodo.imprimirClase();






