import {createContext, useContext} from "react"


export const TodoListContext = createContext({
    todos:[
        {
        id: 1,
        todo:"Todo message",
        completed: false
        }
    ],
addTodo: (todo) =>{},
updateTodo: (id, todo) =>{},
deleteTodo: (id) =>{},
toggleComplete: (id) =>{},
})

export const useTodo = () =>{
    return useContext(TodoListContext)
}

export const TodoProvider = TodoListContext.Provider