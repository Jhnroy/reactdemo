import {  useEffect, useState } from 'react'

import './App.css'
import { MemberTable } from './Member'

function App() {
  // const [count, setCount] = useState(0)

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [list, setList] = useState([
    {
    id: 1,
    name: 'name',
    role: 'role',
    },{
      id: 1,
      name: 'tess',
      role: 'dev',
    }
  ])
  console.log(list)

  const addMember = () => {
    setList([...list, {
      id: list.length + 1,
      name: name,
      role: role,
    }]);
  }
  
  useEffect(() => {
   document.title = `Team ${list.length} members`
  }, [list]);
  return (
    <>
      <form onSubmit={ (e)=>e.preventDefault() }>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          name="role"
          placeholder="role"
          onChange={(e) => setRole(e.target.value)}
        />

        <button 
        type= "submit"
        onClick={addMember}>Add Member</button>

        <div>
          <MemberTable list={list} setList={setList} />
        </div>

        <button onClick={() => 
          setList(list.filter((members) => 
          members.id !== members.id))}>Delete</button>
      </form>
      
    </>
  )
}

export default App
