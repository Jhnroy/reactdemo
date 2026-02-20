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

export const MemberTable: React.FC<Props> = ({ list }) => {
  return (
    <div className="flex justify-center mt-6">
        <table
        className="
        w-full
        max-w-4xl 
        border  
        border-gray-300 
        rounded-lg 
        overflow-hidden 
        shadow-md"
         
        style={{ marginTop: "10px" }}>
        <thead className="bg-gray-100">
            <tr>
            <th className="px-4
            font-semibold 
            text-gray700
            border-b">Name</th>
            <th className="
            px-4
            font-semibold 
            text-gray700
            border-b">Role</th>
            </tr>
        </thead>

        <tbody>
            {list.map((member) => (
            <tr key={member.id}>
                <td className="px-4 py-2 border-b">{member.name}</td>
                <td>{member.role}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
};