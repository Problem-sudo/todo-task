import { useState } from 'react'
import Todoinput from './components/ToDoInput.jsx'
import TodoList from './components/TodoList.jsx'

import './App.css'

function App() {
  const [listTodo,setListTodo]=useState([]);

  const addList=(inputText)=>{
    if(inputText.trim()!=='')
    setListTodo([...listTodo,inputText]);
  }

  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo]);

  }
  const updateListItem=(index,newText)=>{
    const updateList =[...listTodo];
    updateList[index]=newText;
    setListTodo(updateList);

  }
  

  return (
    <>
      <dvi className="todo">
     
      </dvi>
      <div className='main-container'>
        <div className='centre-container'>
          <Todoinput addList={addList}/>
          <h1 className='add-heading'> TODO</h1>
          <hr/>
          {listTodo.map((listItem,i)=>(
            <TodoList 
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
            updateItem={updateListItem}
            />
          ))}

        </div>
      </div>
    </>
  )
}

export default App
