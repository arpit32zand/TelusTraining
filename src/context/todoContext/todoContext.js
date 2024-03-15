import { createContext, useContext, useState } from "react";

export const TodoContext = createContext(null)

export const TodoProvider = ({ children }) => {
    const [task, setTask] = useState([])
    const [completeTask, setCompleteTask] = useState([])
    return (
        <TodoContext.Provider
            value={{
                task, 
                setTask,
                completeTask,
                setCompleteTask
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoList = () => {
    return useContext(TodoContext)
}