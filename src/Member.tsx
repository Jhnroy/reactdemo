import React, { useState } from "react";

type MemberType = {
  id: number;
  name: string;
  role: string;
};

interface Props {
  list: MemberType[];
  setList: React.Dispatch<React.SetStateAction<MemberType[]>>;
}

export const MemberTable: React.FC<Props> = ({ list, setList }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");

  const handleRemove = (id: number) => {
    setList(prev => prev.filter(member => member.id !== id));
  };

  const handleEdit = (member: MemberType) => {
    setEditId(member.id);
    setEditName(member.name);
    setEditRole(member.role);
  };

  const handleSave = (id: number) => {
    setList(prev =>
      prev.map(member =>
        member.id === id
          ? { ...member, name: editName, role: editRole }
          : member
      )
    );
    setEditId(null);
  };

  return (
    <div className="flex justify-center mt-6 ">
      <table className="w-full 
      dark:text-gray-100
      max-w-4xl 
      border 
      border-gray-300 
      rounded-lg shadow-md 
      text-lg">
        <thead className="bg-gray-100 ">
          <tr>
            <th className="px-6 py-4 
            font-semibold 
            text-gray-700 
            border-b">
              Name
            </th>
            <th className="px-6 
            py-4 
            font-semibold 
            
            text-gray-700 
            border-b">
              Role
            </th>
            <th className="px-6 
            py-4 
            font-semibold 
            
            text-gray-700 
            border-b text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {list.length === 0 ? (
            <tr>
              <td colSpan={3} className="px-6 
              py-4 
              text-center 
              text-gray-800">
                No members found
              </td>
            </tr>
          ) : (
            list.map(member => (
              <tr
                key={member.id}
                // className="hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 border-b">
                  {editId === member.id ? (
                    <input
                      value={editName}
                      onChange={e => setEditName(e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    member.name
                  )}
                </td>

                <td className="px-6 py-4 border-b">
                  {editId === member.id ? (
                    <input
                      value={editRole}
                      onChange={e => setEditRole(e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    member.role
                  )}
                </td>

                <td className="px-6 py-4 border-b text-center space-x-2">
                  {editId === member.id ? (
                    <>
                      <button
                        onClick={() => handleSave(member.id)}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="px-3 py-1 
                        bg-gray-400 text-white 
                        rounded hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(member)}
                        className="px-3 py-1 
                        bg-blue-500 
                        text-white 
                        rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleRemove(member.id)}
                        className="px-3 
                        py-1 
                        bg-red-500 
                        text-white 
                        rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};