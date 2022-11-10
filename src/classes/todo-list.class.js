import { Todo } from './todo.class';

export class TodoList {

    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        //se implementa filter para poder realizar una busqueda en el arreglo de los elementos seleccionados
        //documentacion en mozilla npm js
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        //se implementa filter para poder realizar una busqueda en el arreglo de los elementos no completados
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        //convierte el array u objeto en string
        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo'))? this.todos = JSON.parse(localStorage.getItem('todo')) : this.todos = [];
        this.todos =  this.todos.map(Todo.fromJson);
        


    }


}

