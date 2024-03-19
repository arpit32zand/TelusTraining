import './App.css';
import { Route, Routes } from 'react-router-dom';

import TodoList from './screens/todoList/todoList'
import AddItem from './screens/addItem/addItem'
import TodoTask from './screens/todoTask/todoTask';

function App() {
  return (
    <Routes>
      <Route path='/' element={<TodoList />} />
      <Route path='/add-item' element={<AddItem />} />
      <Route path='/todo-task' element={<TodoTask />} />
    </Routes>
  );
}

export default App;