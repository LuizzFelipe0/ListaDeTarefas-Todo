import React, {useState,useEffect} from 'react';
import {style} from './tailwindstyle';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {Todo} from './Todo';
import { database } from './Firebase';
import {query,collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore';
import { async } from '@firebase/util';

function App() {

const [todos, setTodos] = useState([])
const [input, setInput] = useState('')

//Criar todo

const generateTodo = async (e) => {
  e.preventDefault(e)
  if(input === ''){
    alert('Adicione um tarefa válida!')
    return
  }
  await addDoc(collection(database, 'todos'), {
    text: input, completed: false,
  })
  setInput('')
};

//Ler todo pela firebase

useEffect(()=>{
const path = query(collection(database, 'todos'))
const unsubscribe = onSnapshot(path, (querySnapshot) => {
  let TodosArray = []
  querySnapshot.forEach((arqv) => {
    TodosArray.push({...arqv.data(), id:arqv.id})
  });
  setTodos(TodosArray)
}) 
return () => unsubscribe;
},[])

//Atualizar todo na firebase

const completeAlternate = async(todo) => {
    await updateDoc(doc(database, 'todos', todo.id),{
      completed: !todo.completed
    })
}

//Deletar todo

const cancelTodo = async (id) => {
  await deleteDoc(doc(database, 'todos', id))
}

  return (
    <div className={style.backg}>
      <div className={style.container}>
        <h3 className={style.heading}>Lista de Tarefas</h3>
        <form onSubmit={generateTodo} className={style.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder='Adicione uma Tarefa'/>
          <button className={style.button}><BsFillPlusCircleFill size={42}/></button>
        </form>
        <ul>
            {todos.map((todo, index) => (
            <Todo   key={index}   todo={todo}   completeAlternate={completeAlternate}   cancelTodo={cancelTodo }/>
          ))}
        </ul>
        {todos.length < 1 ? null : <p className={style.count}>{`Você possui ${todos.length} tarefas`}</p>}
        <p className={style.author}>© 2022 Luiz's List of Todos </p>
      </div>
    </div>
  );
}

export default App;
