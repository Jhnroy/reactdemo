import React from "react";

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

  const handleRemove = (id: number) => {
    setList(prev => prev.filter(member => member.id !== id));
  };

  return (
    <div className="flex justify-center mt-6">
      <table
        className="
          w-full
          max-w-4xl 
          border border-gray-300 
          rounded-lg 
          overflow-hidden 
          shadow-md
          text-lg
        "
      >
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 font-semibold text-gray-700 border-b">
              Name
            </th>
            <th className="px-6 py-4 font-semibold text-gray-700 border-b">
              Role
            </th>
            <th className="px-6 py-4 font-semibold text-gray-700 border-b text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {list.length === 0 ? (
            <tr>
              <td
                colSpan={3}
                className="px-6 py-4 text-center text-gray-500"
              >
                No members found
              </td>
            </tr>
          ) : (
            list.map((member) => (
              <tr
                key={member.id}
                className="hover:bg-gray-50 
                transition duration-300 ease-in-out"
              >
                <td className="px-6 py-4 border-b">
                  {member.name}
                </td>
                <td className="px-6 py-4 border-b">
                  {member.role}
                </td>
                <td className="px-6 py-4 border-b text-center">
                  <button
                    onClick={() => handleRemove(member.id)}
                    className="
                      px-3 py-1
                      bg-red-500
                      text-white
                      rounded-md
                      hover:bg-red-600
                      transition
                    "
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};