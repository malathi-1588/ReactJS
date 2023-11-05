import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from 'react'
import Click from './components/Click';
import { Button } from 'react-bootstrap';

function Todo() {
  const[todo, setTodo] = useState("");
  const[todos, setTodos] = useState([]);
  const[editID, setEditID] = useState(0);

  const handleChange = (e) =>{
    setTodo(e.target.value)
    //console.log(todo)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(editID){
      const editTodo = todos.find((i)=> i.id ===editID)
      const updatedTodo = todos.map((t)=>
        t.id === editTodo.id
          ? (t={id: t.id, todo})
          :{i: t.id, todo: t.todo}
        );
      setTodos(updatedTodo);
      setEditID(0);
      setTodo("");
      return;
    }

    if(todo !==''){
      setTodos([...todos, {id: `${todo}-${Date.now()}`, todo}])
      setTodo('');
    }
  }
  const deleteHandler =(id)=>{
    const delTodo = todos.filter((t)=>t.id!==id)
    setTodos([...delTodo])
  }
  const editHandler =(id)=>{
    const editTodo = todos.find((i)=> i.id===id)
    setTodo(editTodo.todo)
    setEditID(id)
    console.log('Edithandler')
  }

  return (
    <>
    <div className="container bg-dark text-center">
      <form onSubmit={handleSubmit}>
        <input className='form-control mt-3' 
        type='text' 
        placeholder='Enter todo work'
        onChange={handleChange}
        value = {todo}
        />
        <button className='btn btn-primary mt-2'>Add Todo</button>
      </form>
    </div>
    <div>
      {todos.map((t)=>{
          return(
            <>
              <div className='container bg-info mt-2'>
                <h3 className='todo' key={t.id}>
                  {t.todo}
                </h3>
              {/* &nbsp;<button onClick={()=>deleteHandler(t.id)} className='btn btn-danger'>Delete</button> */}
              <Button variant="danger" onClick={() => deleteHandler(t.id)}>Delete</Button>
              &nbsp;<button onClick={()=>editHandler(t.id)} className='btn btn-primary'>Edit</button>
              </div>
            </>
          );
        })
      }
    </div>
    </>

  );
}
export default Todo;