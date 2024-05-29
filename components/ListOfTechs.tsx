import React from "react";

interface ListOfTechsProps {
  title: string;
  stack: string[];
}
const ListOfTechs = ({ title, stack }: ListOfTechsProps) => {
  return (
    <ul>
      <h2 className="font-bold">{title}:</h2>
      {stack.map((item) => (
        <li key={item} className="font-extralight">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListOfTechs;
