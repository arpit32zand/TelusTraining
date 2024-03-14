import { createContext, useContext, useState } from "react";

export const TodoContext = createContext(null)

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState()
    return (
        <TodoContext.Provider
            value={{
                todoList, setTodoList
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoList = () => {
    return useContext(TodoContext)
}