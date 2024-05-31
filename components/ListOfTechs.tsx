import React from "react";

interface ListOfTechsProps {
  title: string;
  stack: string[];
}
const ListOfTechs = ({ title, stack }: ListOfTechsProps) => {
  return (
    <div>
      <span>{title}</span>
      <ul>
        {stack.map((item) => (
          <li key={item} className="font-sans font-extralight opacity-80">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfTechs;
