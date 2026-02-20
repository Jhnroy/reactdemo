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
    <table border={1} cellPadding={8} style={{ marginTop: "10px" }}>
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
  );
};