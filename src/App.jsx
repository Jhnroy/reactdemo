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
      id: 2,
      name: 'tess',
      role: 'dev',
    }
  ])
  console.log(list)

  const addMember = () => {
    if (!name.trim() || !role.trim()) return;
    setList([...list, {
      id: list.length + 1,
      name: name,
      role: role,
    }]);
    setName('');
    setRole('');
  }
  
  useEffect(() => {
   document.title = `Team ${list.length} members`
  }, [list]);
  return (
    <>
    
      <form
      className="flex flex-col
      
      bg-gray-500
      items-center
      justify-center
      h-screen
      rounded-sm
      " 
      onSubmit={ (e)=>e.preventDefault() }>
      <div className="
      text-lg
      mb-6
      font-bold
      text-gray-100
      text-center
      md:text-3xl
      ">
        <h1>I.T Department Team has a total of {list.length} members</h1>
      </div>

        <div className="flex 
        flex-col 
        sm:flex-row 
        gap-4 
        items-center 
        mb-4">
          <input
            className="border-2 
            rounded px-3 
            py-2 w-64 sm:w-72 
            focus:outline-none 
            focus:ring-2 
            focus:ring-indigo-400"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border-2 rounded 
            px-3 py-2 
            w-64 
            sm:w-72 
            focus:outline-none 
            focus:ring-2 
            focus:ring-indigo-400"
            type="text"
            name="role"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="flex items-center gap-2">
            <button
              className="bg-indigo-600 
              text-white 
              px-4 py-2 rounded 
              hover:bg-indigo-700 transition"
              type="button"
              onClick={addMember}
            >
              Add Member
            </button>

            {/* <button
              className="bg-rose-500 
              text-white 
              px-4 py-2 
              rounded hover:bg-red-600 
              transition"
              type="button"
              onClick={() => setList(list.slice(0, -1))}
            >
              Delete Last
            </button> */}
          </div>

          <div className="w-full mt-6">
            <MemberTable list={list} setList={setList} />
          </div>
        </div>
      </form>
      
    </>
  )
}

export default App
