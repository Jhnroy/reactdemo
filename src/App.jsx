import { use, useEffect, useState } from 'react'

import './App.css'

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
      <div>
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

        <button onClick={addMember}>Add Member</button>

        <table border="1" cellPadding="8" style={{ marginTop: "10px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {list.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => setList(list.filter((members) => members.id !== members.id))}>Delete</button>
      </div>
      
    </>
  )
}

export default App
