// use PascalCase for components such as functions
function Message() {
  // this is JSX (JavaScript XML) syntax
  const name = "Paolo";
  if (name) {
    // use curly braces to embed JavaScript expressions in JSX
    return <h1>Hello {name}!</h1>;
  }
  return <h1>Hello World!</h1>;
}

export default Message;
