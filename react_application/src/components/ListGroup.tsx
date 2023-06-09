import { useState } from "react";

// create an interface to define the type of props (properties) that the component will receive
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // useState is a state-Hook that allows us to add React state to function components
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   items = [];

  // event handler
  // it is also included in the return statement (commented out) as another way to write it
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* // use curly braces to embed JavaScript expressions in JSX */}
      {/* could only use HTML elements or React components in JSX; otherwise use curly braces */}
      {/* {items.length === 0 ? "No items found" : null} */}
      {/* could also rewrite the above ternary method more simple below */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // use key attribute to help React identify which items have changed, are added, or are removed
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {/* onClick={(event) => console.log(event, item, index)} */}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
