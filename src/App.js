import { Route, Routes } from 'react-router-dom';
import './App.css';

import TodoList from './components/todoList/todoList'
import AddItem from './components/addItem/addItem'

function App() {
  return (
    <Routes>
      <Route path='/' element={<TodoList />} />
      <Route path='/add-item' element={<AddItem />} />
    </Routes>
  );
}

export default App;