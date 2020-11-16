import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

const todolist = new TodoList();
const tarea = new Todo('Aprender JavaScript');

todolist.nuevoTodo(tarea);

tarea.completado = true;

console.log(todolist);

crearTodoHtml(tarea);
