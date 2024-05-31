import React from "react";

interface ListOfTechsProps {
  title: string;
  stack: string[];
}
const ListOfTechs = ({ title, stack }: ListOfTechsProps) => {
  return (
    <ul>
      <h2 className="font-semibold">{title}:</h2>
      {stack.map((item) => (
        <li key={item} className="opacity-80 font-extralight font-sans">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListOfTechs;
