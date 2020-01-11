import React from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string; // string type
  bool: boolean; // bool type
  i: number; // integer
  fn: () => void; // function that returns nothing
  fn2: () => string; // function that returns a string
  fn3: (name: string) => string; // function which takes a string argument and returns another string
  person: Person; // person which grabs data from the above interface
}
// FC = FunctionComponent, TypeScript knows this is a functional component
// export const TextField: React.FC<{text: string}> = () => { <---- this is also valid, by interface is neater
export const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
};
