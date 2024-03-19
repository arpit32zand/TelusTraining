import './App.css';

import TodoList from './components/todoList/todoList'
import AddItem from './components/addItem/addItem'

function App() {
  return (
    <>
      <AddItem />
      <TodoList />
    </>
  );
}

export default App;