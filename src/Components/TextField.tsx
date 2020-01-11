import React, { useState. useRef } from "react";

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
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// FC = FunctionComponent, TypeScript knows this is a functional component
// export const TextField: React.FC<{text: string}> = () => { <---- this is also valid, by interface is neater
export const TextField: React.FC<Props> = (handleChange) => {
  // useState data is automatically typed for you, || const [count, setCount] = useState(5); || count would be number
  /* We don't have to speicify a return type for useState, TypeScript will auto detect this value.
    However if we needed a value to be null or a number then we can explicitly set this using the notation below
    */
  const [count, setCount] = useState<number | null>(5);

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <input ref={inputRef} onChange={handleChange}/>
    </div>
  );
};
